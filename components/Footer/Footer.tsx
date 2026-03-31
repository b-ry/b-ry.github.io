import clsx from 'clsx'
import Link from 'next/link'
import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={clsx(styles.footer, 'footer')}>
      <div className={clsx(styles.footerWrapper)}>
        <div className={clsx(styles.contact)}>
          <p>Designed in browser and coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a> by me. Built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> and deployed with <Link href="/about">Github pages</Link>. Text is mostly set in <a href="https://fonts.google.com/specimen/Outfit" target="_blank" rel="noopener noreferrer">Outfit</a> by Google Fonts.</p>

          <p className={styles.copyright}>Copyright &copy; {new Date().getFullYear()} Bryon Urbanec</p>
        </div>
      </div>
    </footer>
  )
}
