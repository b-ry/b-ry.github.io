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
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 70%' },
        y: reducedMotion ? 0 : 30,
        opacity: 0,
        duration: reducedMotion ? 0 : 0.5,
        ease: 'power2.out',
      })
    })
    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return null
}