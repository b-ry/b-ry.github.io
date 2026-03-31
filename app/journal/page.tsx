import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Journal — Bryon Urbanec',
}

export default async function JournalIndex() {
  const posts = await getAllContent('posts')

  return (
    <div className="journal">
      <h1>Journal</h1>
      <ul className="post-list">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/journal/${post.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              {post.frontmatter.date && (
                <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
