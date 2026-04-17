'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import styles from './header.module.scss'
import '@/styles/globals.scss'
import gsap from 'gsap'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const headerContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!headerContentRef.current) return
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    gsap.fromTo(headerContentRef.current.children, 
      { opacity: 0, y: 30 },   // from
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: headerContentRef.current.children, start: 'top 70%' } })  // to
    }, [])

  return (
    <header className={clsx(styles.header, 'clearfix', 'header')}>
      <div className={styles.headerContent} ref={headerContentRef}>
        <h1 className={styles.siteTitle}>
          <Link className={styles.siteLogo} href="/">
            Bryon Urbanec
          </Link>
        </h1>
        <h2 className={styles.subTitle}>
          Front-End
          <span>Developer</span>
        </h2>
        <p className={styles.headerIntro}>Front-End Developer, crafting accessible, performant web experiences across agency, enterprise, and government.</p>
        

        <nav className={styles.menu}>
          <ul className={styles.menuItems}>
            <li className={styles.menuItem}>
              <Link
                href="/#experience"
                className={pathname.startsWith('#experience') ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.menuItemDetail}></span>
                <span className={styles.menuItemText}>Experience</span>
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link
                href="/#projects"
                className={pathname === '#projects' ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                <span className={styles.menuItemDetail}></span>
                <span className={styles.menuItemText}>Projects</span>
              </Link>
            </li>
          </ul>
        </nav>

        <ul className={styles.socialMenuItems}>
          <li className={styles.socialMenuItem}>
            <Link
              href="https://github.com/b-ry"
              onClick={() => setMenuOpen(true)}
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                </span>
                <span className="visually-hidden">Github</span>
            </Link>
          </li>

          <li className={styles.socialMenuItem}>
            <Link
              href="https://www.linkedin.com/in/bryon-urbanec-27bb423a?trk=nav_responsive_tab_profile"
              onClick={() => setMenuOpen(true)}
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="3"/><path d="M7 10v7M7 7v.5M11 10v7M11 13q0-3 3-3t3 3v4"/></svg>
                </span>
                <span className="visually-hidden">LinkedIn</span>
            </Link>
          </li>

          <li className={styles.socialMenuItem}>
            <Link
              href="mailto:bryonurbanec@gmail.com"
              onClick={() => setMenuOpen(true)}
              >
                <span className={styles.socialIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/></svg>
                </span>
                <span className="visually-hidden">Email</span>
            </Link>
          </li>
          <li className={styles.socialMenuItem}>
            <Link
            href="bryonurbanec-resume.pdf" 
            onClick={() => setMenuOpen(false)}
            >
              <span className={styles.socialIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
              </span>
              <span className="visually-hidden">Resume</span>
            </Link>
          </li>

        </ul>
      </div>
    </header>
  )
}
