import type { Metadata } from 'next'
import { getAllContent } from '@/lib/content'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Work — Bryon Urbanec',
}

export default async function WorkIndex() {
  const workItems = await getAllContent('work')

  return (
    <section className="projects clearfix">
      <ul className="project-list">
        {workItems
          .filter((item) => item.frontmatter['teaser-image'])
          .map((item, i) => (
            <Card key={item.slug} item={item} basePath="work" index={i} />
          ))}
      </ul>
    </section>
  )
}
