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
        <p>I'm a front-end developer with a design background and over 10 years of agency and government web experience. I have led design teams, built component systems, and written the code that turns designs into working sites. I care about accessibility, clean markup, and getting the details right.</p>
        <p>Most of my work has been in Drupal, though I've worked across WordPress and other platforms too. I have contributed to open-source projects and enjoy working on teams where people take the craft seriously.</p>
        <p>When I'm not in the code you can find me on the gravel roads of Northern Colorado on my bike, in the garden, or cooking something worth sharing with my wife, three boys, and our pup.</p>
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
