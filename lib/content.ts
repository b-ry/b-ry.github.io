import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const contentDir = path.join(process.cwd(), 'content')

export type ContentType = 'work' | 'lab' | 'posts' | 'job'

export interface WorkFrontmatter {
  title: string
  featured: boolean
  weight: number
  category: string
  draft?: boolean
  service?: string
  'teaser-image'?: string
  'teaser-alt'?: string
  'banner-image'?: string
  'external-link'?: string
  'github-link'?: string
  'live-link'?: string
  intro?: string
}

export interface PostFrontmatter {
  title: string
  date?: string
}

export interface JobFrontmatter {
  title?: string
  jobtitle?: string
  dates?: string
  tags?: string
  'external-link'?: string
  weight?: number
}

export type Frontmatter = WorkFrontmatter | PostFrontmatter | JobFrontmatter

export interface ContentItem {
  slug: string
  frontmatter: WorkFrontmatter & PostFrontmatter & JobFrontmatter
  content?: string
  contentHtml?: string
}

function serializeFrontmatter(data: Record<string, unknown>): WorkFrontmatter & PostFrontmatter {
  const result: Record<string, unknown> = {}
  for (const [key, value] of Object.entries(data)) {
    result[key] = value instanceof Date ? value.toISOString().split('T')[0] : value
  }
  return result as unknown as WorkFrontmatter & PostFrontmatter
}

export async function getAllContent(type: ContentType): Promise<ContentItem[]> {
  const dir = path.join(contentDir, type)
  const filenames = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

  const items = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.md$/, '')
      const fullPath = path.join(dir, filename)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const processed = await remark().use(html, { sanitize: false }).process(content)

      return {
        slug,
        frontmatter: serializeFrontmatter(data),
        content,
        contentHtml: processed.toString(),
      }
    })
  )

  const published = items.filter((item) => !item.frontmatter.draft)

  // Sort by weight for work/lab, by date descending for posts
  if (type === 'posts') {
    return published.sort((a, b) => {
      const dateA = a.frontmatter.date ?? ''
      const dateB = b.frontmatter.date ?? ''
      return dateB.localeCompare(dateA)
    })
  }

  return published.sort((a, b) => (a.frontmatter.weight ?? 99) - (b.frontmatter.weight ?? 99))
}

export async function getContentBySlug(type: ContentType, slug: string): Promise<ContentItem> {
  const fullPath = path.join(contentDir, type, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  // Use remark to convert markdown to HTML; allow embedded HTML to pass through
  const processed = await remark().use(html, { sanitize: false }).process(content)
  const contentHtml = processed.toString()

  return {
    slug,
    frontmatter: serializeFrontmatter(data),
    contentHtml,
  }
}

export function getAllSlugs(type: ContentType): string[] {
  const dir = path.join(contentDir, type)
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''))
}
