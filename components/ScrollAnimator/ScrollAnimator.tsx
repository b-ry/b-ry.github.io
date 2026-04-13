'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollAnimator() {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = gsap.utils.toArray<Element>('.introText, #experience > li, #projects > li, .introText')
    items.forEach((el) => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },   // from
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 70%' } })  // to
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return null
}