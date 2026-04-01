import type { Metadata } from 'next'
import Image from 'next/image'
import { getAllSlugs, getContentBySlug } from '@/lib/content'
import styles from './page.module.scss'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs('work').map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = await getContentBySlug('work', slug)
  return { title: `${frontmatter.title} — Bryon Urbanec` }
}

export default async function WorkPost({ params }: Props) {
  const { slug } = await params
  const { frontmatter, contentHtml } = await getContentBySlug('work', slug)
  const bannerImage = frontmatter['banner-image']
  const externalLink = frontmatter['external-link']

  return (
    <section className={styles.projectWrapper}>
      {bannerImage && (
        <figure className="banner">
          <Image
            src={`/img/${bannerImage}`}
            alt={frontmatter.title}
            width={1400}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
        </figure>
      )}

      <div className={styles.projectHeader}>
        <div className="styles.projectTitleWrapper">
          <h1 className={styles.pageTitle}>{frontmatter.title}</h1>
          <div className="service-list">
            {frontmatter.service}
            {externalLink && (
              <a href={externalLink} target="_blank" rel="noreferrer">
                {' '}
                Live Site
              </a>
            )}
          </div>
        </div>
        <div className={styles.projectIntro}>
          <p>{frontmatter.intro}</p>
        </div>
      </div>

      <article
        className="project-content clearfix"
        dangerouslySetInnerHTML={{ __html: contentHtml ?? '' }}
      />
    </section>
  )
}
