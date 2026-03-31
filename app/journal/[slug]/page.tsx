import type { Metadata } from 'next'
import { getAllSlugs, getContentBySlug } from '@/lib/content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs('posts').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = await getContentBySlug('posts', slug)
  return { title: `${frontmatter.title} — Bryon Urbanec` }
}

export default async function JournalPost({ params }: Props) {
  const { slug } = await params
  const { frontmatter, contentHtml } = await getContentBySlug('posts', slug)

  return (
    <article className="post">
      <header className="post-header">
        <h1>{frontmatter.title}</h1>
        {frontmatter.date && (
          <time dateTime={frontmatter.date}>{frontmatter.date}</time>
        )}
      </header>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: contentHtml ?? '' }}
      />
    </article>
  )
}
