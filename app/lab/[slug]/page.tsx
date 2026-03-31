import type { Metadata } from 'next'
import Image from 'next/image'
import { getAllSlugs, getContentBySlug } from '@/lib/content'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs('lab').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = await getContentBySlug('lab', slug)
  return { title: `${frontmatter.title} — Bryon Urbanec` }
}

export default async function LabPost({ params }: Props) {
  const { slug } = await params
  const { frontmatter, contentHtml } = await getContentBySlug('lab', slug)
  const bannerImage = frontmatter['banner-image']
  const githubLink = frontmatter['github-link']
  const liveLink = frontmatter['live-link']

  return (
    <>
      {bannerImage && (
        <figure className="full-width banner">
          <Image
            src={`/img/${bannerImage}`}
            alt={frontmatter.title}
            width={1400}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
      )}

      <div className="project-header clearfix">
        <div className="projectTitleWrapper">
          <h1 className="page-title">{frontmatter.title}</h1>
          <div className="service-list">
            {frontmatter.category}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                {' '}
                GitHub
              </a>
            )}
            {liveLink && (
              <a href={`/${liveLink}`}>
                {' '}
                Live
              </a>
            )}
          </div>
        </div>
        <div className="project-intro">
          <p>{frontmatter.intro}</p>
        </div>
      </div>

      <article
        className="project-content clearfix"
        dangerouslySetInnerHTML={{ __html: contentHtml ?? '' }}
      />
    </>
  )
}
