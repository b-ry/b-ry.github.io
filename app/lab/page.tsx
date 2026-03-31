import type { Metadata } from 'next'
import { getAllContent } from '@/lib/content'
import Card from '@/components/Card'

export const metadata: Metadata = {
  title: 'Lab — Bryon Urbanec',
}

export default async function LabIndex() {
  const labItems = await getAllContent('lab')

  return (
    <section className="projects clearfix">
      <ul className="project-list">
        {labItems
          .filter((item) => item.frontmatter['teaser-image'])
          .map((item, i) => (
            <Card key={item.slug} item={item} basePath="lab" index={i} />
          ))}
      </ul>
    </section>
  )
}
