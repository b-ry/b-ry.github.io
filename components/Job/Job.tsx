'use client'

import clsx from 'clsx'
import styles from './job.module.scss'
import type { ContentItem } from '@/lib/content'
import TagList from '@/components/TagList'

interface JobCardProps {
  item: ContentItem
}

export default function JobCard({ item }: JobCardProps) {
  const { frontmatter } = item
  const externalLink = frontmatter['external-link']

  // Clicking anywhere on the card opens the main link,
  // unless the user is selecting text.
  function handleCardClick() {
    if (!window.getSelection()?.toString() && externalLink) {
      window.open(externalLink, '_blank', 'noreferrer')
    }
  }

  return (
    <article className={styles.jobCard} onClick={handleCardClick}>
      <div className={styles.jobCardWrapper}>
        <div className={styles.jobMeta}>
          <span className={styles.jobDates}>{frontmatter.dates}</span>
        </div>
        <div className={styles.jobContent}>
          <h3 className={styles.jobCompany}>
            {externalLink ? (
              // stopPropagation prevents the card click from also firing
              <a
                href={externalLink}
                target="_blank"
                rel="noreferrer"
                className={clsx('no-border', styles.jobLink)}
                onClick={(e) => e.stopPropagation()}
              >
                {frontmatter.jobtitle} · {frontmatter.title}
                <svg width="100%" height="100%" viewBox="0 0 2134 2134" fill="currentColor"><path d="M853.633,0c-117.972,0 -213.283,95.311 -213.283,213.283c-0,117.973 95.311,213.284 213.283,213.284l551.204,-0l-1342.35,1342.35c-83.313,83.314 -83.313,218.615 0,301.929c83.314,83.314 218.616,83.314 301.93,-0l1342.35,-1342.35l-0,551.204c-0,117.972 95.311,213.283 213.283,213.283c117.972,0 213.283,-95.311 213.283,-213.283l0,-1066.42c0,-117.972 -95.311,-213.283 -213.283,-213.283l-1066.42,0Z"/></svg>
              </a>
              ) : (
                frontmatter.title
            )}
          </h3>
          <div
            className={styles.jobBody}
            dangerouslySetInnerHTML={{ __html: item.contentHtml ?? '' }}
          />
          {frontmatter.tags && <TagList tags={frontmatter.tags} />}
        </div>
      </div>
    </article>
  )
}
