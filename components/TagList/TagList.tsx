import styles from './taglist.module.scss'

interface TagListProps {
  tags: string
}

export default function TagList({ tags }: TagListProps) {
  return (
    <ul className={styles.tagList}>
      {tags.split(',').map((tag) => (
        <li key={tag.trim()} className={styles.tag}>{tag.trim()}</li>
      ))}
    </ul>
  )
}
