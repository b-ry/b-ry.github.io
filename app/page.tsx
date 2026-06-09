import Link from 'next/link'
import { getAllContent } from '@/lib/content'
import Card from '@/components/Card'
import JobCard from '@/components/Job'
import styles from './page.module.scss'
import ScrollAnimator from '@/components/ScrollAnimator/ScrollAnimator'


export default async function Home() {
  const workItems = await getAllContent('work')
  const jobs = await getAllContent('job')

  return (
    <section className="pageContent">
      <ScrollAnimator />
      <div className={`${styles.introText} introText`}>
        <p>I am a Front-End Engineer with over a decade of experience crafting accessible, performance-driven user interfaces across agency, enterprise, and public sectors. My engineering philosophy centers on semantic HTML, robust CSS/SASS architecture, and strict adherence to WCAG 2.1 and Section 508 accessibility compliance.</p>
        <p>While I work extensively within the modern Drupal ecosystem—architecting scalable design systems using Single Directory Components (SDC) and advanced Twig templating—I approach the web through a platform-agnostic lens. I specialize in bridging the gap between high-fidelity UI design and clean, compliant, and component-driven production code. Whether optimization requires tuning server-side rendering layouts or modernizing client-facing interactions, my goal is always to deliver digital experiences that are inclusive, intuitive, and built to scale.  </p>
      </div>
      
      <ol id="experience" className={styles.jobList}>
        {jobs.map((item) => (
          <li key={item.slug}>
            <JobCard item={item} />
          </li>
        ))}
      </ol>
      <Link href="/Bryon_Urbanec_Resume.pdf" className={styles.resumeLink} title={'PDF of resume for Bryon Urbanec'}>
        View full resume
        <svg width="100%" height="100%" viewBox="0 0 2134 2134" fill="currentColor"><path d="M853.633,0c-117.972,0 -213.283,95.311 -213.283,213.283c-0,117.973 95.311,213.284 213.283,213.284l551.204,-0l-1342.35,1342.35c-83.313,83.314 -83.313,218.615 0,301.929c83.314,83.314 218.616,83.314 301.93,-0l1342.35,-1342.35l-0,551.204c-0,117.972 95.311,213.283 213.283,213.283c117.972,0 213.283,-95.311 213.283,-213.283l0,-1066.42c0,-117.972 -95.311,-213.283 -213.283,-213.283l-1066.42,0Z"/></svg>
      </Link>

      <ul id="projects" className={styles.projectList}>
        {workItems
          .filter((item) => item.frontmatter['teaser-image'])
          .map((item, i) => (
            <li key={item.slug}>
              <Card item={item} basePath="work" index={i} />
            </li>
          ))}
      </ul>
    </section>
  )
}
