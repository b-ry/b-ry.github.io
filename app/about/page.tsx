import type { Metadata } from 'next'
import Image from 'next/image'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: 'About — Bryon Urbanec',
}

export default function About() {
  return (
    <>
      <div className={styles.aboutHeader}>
        <div className={styles.portrait}>
          <Image src="/img/theme/portrait.svg" alt="" width={400} height={400} />
        </div>
      </div>

      <div className={styles.aboutMe}>
        <div className={styles.aboutSection}>
          <h3>My path here was anything but straight.</h3>
          <p>I went to school for music, played saxophone, and spent six months living and performing on a cruise ship. It was an adventure I would not trade, but I learned quickly that making a living as a musician is a different kind of hard. So I went back to school for my first real passion, art, and focused on graphic design.</p>

          <p>That lesson repeated itself. Print was shrinking and the web was getting exciting, so I followed it. I moved into web design and spent years doing what most designers do, caring deeply about how the finished product looked and feeling frustrated when the build did not match the vision. The natural solution was to learn how things were actually built. I picked up front-end development and Drupal so I could have more control over the outcome, and I ended up spending most of my career with one foot in design and one foot in development.</p>

          <p>I have recently moved to front-end full time and it turns out this is where I am most at home. I genuinely enjoy understanding how things work beneath the surface, seeing the inner structure of a design, mapping out in my head how components can fit together, and asking the right questions before too many decisions get locked in. I especially enjoy tricky components with interesting responsive patterns and the challenge of finding the simplest solution to a complex problem.</p>

          <p><strong>Outside of work</strong> I spend as much time as I can on my bike. Not road racing, not mountain biking, gravel roads in Northern Colorado where the traffic disappears and you can actually think. Larimer County roads over Weld County any day. I have done the Denver Century twice, 100 miles through Denver and the surrounding towns, which sounds like a good idea until about mile 70. I also garden, cook, and spend time with my wife, three boys, and our dog.</p>

          <p><strong>I am currently open to new opportunities.</strong> If what you see here looks like a fit, I would love to connect.</p>
        </div>
      </div>
    </>
  )
}
