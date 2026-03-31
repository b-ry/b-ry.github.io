'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import clsx from 'clsx'
import styles from './card.module.scss'
import type { ContentItem } from '@/lib/content'
import TagList from '../TagList'

interface CardProps {
  item: ContentItem
  basePath: 'work' | 'lab'
  index: number
}

export default function Card({ item, basePath, index }: CardProps) {
  const { slug, frontmatter } = item
  const teaserImage = frontmatter['teaser-image']
  const externalLink = frontmatter['external-link']
  const internalHref = `/${basePath}/${slug}`
  const router = useRouter()

  function handleCardClick() {
    if (window.getSelection()?.toString()) return
    if (externalLink) {
      window.open(externalLink, '_blank', 'noreferrer')
    } else {
      router.push(internalHref)
    }
  }

  return (
    <article className={`project-${index}`} onClick={handleCardClick}>
      <div className={styles.projectCard}>
        {teaserImage && (
          <div className={styles.projectAssetWrapper}>
            <Image
              src={`/img/${teaserImage}`}
              alt={frontmatter['teaser-alt'] ?? ''}
              width={180}
              height={105}
              sizes='(min-width: 180px) 180px'
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        )}
        <div className={styles.projectTitleWrapper}>
          <h3>
            {externalLink ? (
              <a
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                className={clsx('no-border', styles.projectCardLink)}
                onClick={(e) => e.stopPropagation()}
              >
                {frontmatter.title}
                <svg width="100%" height="100%" viewBox="0 0 2134 2134" fill="currentColor"><path d="M853.633,0c-117.972,0 -213.283,95.311 -213.283,213.283c-0,117.973 95.311,213.284 213.283,213.284l551.204,-0l-1342.35,1342.35c-83.313,83.314 -83.313,218.615 0,301.929c83.314,83.314 218.616,83.314 301.93,-0l1342.35,-1342.35l-0,551.204c-0,117.972 95.311,213.283 213.283,213.283c117.972,0 213.283,-95.311 213.283,-213.283l0,-1066.42c0,-117.972 -95.311,-213.283 -213.283,-213.283l-1066.42,0Z"/></svg>
              </a>
            ) : (
              <Link
                href={internalHref}
                className={clsx('no-border', styles.projectCardLink, styles.projectInternalLink)}
                onClick={(e) => e.stopPropagation()}
              >
                {frontmatter.title}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
              </Link>
            )}
          </h3>
          <p>{frontmatter.intro}</p>
          {frontmatter.tags && <TagList tags={frontmatter.tags} />}
        </div>
      </div>
    </article>
  )
}
