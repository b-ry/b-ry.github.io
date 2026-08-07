---
title: Mission Manifest
weight: 5
external-link: https://mission-manifest.netlify.app/
teaser-image: projects/mm/mission_manifest.png
teaser-alt: Screenshot of Raleigh homepage.
intro: Space exploration generates data at the speed of a rocket launch — Mission Manifest was built to keep up with it.
tags: Vanilla JavaScript (ES Modules), SCSS, Launch Library 2 API
---

This personal project pulls live mission data from the Launch Library 2 API to surface upcoming and past rocket launches in a clean, immersive interface. The goal was straightforward: build something genuinely useful, with no framework crutches, and treat the design and accessibility with the same care as the code.

The UI is organized around a card-based grid with real-time countdown timers that tick down to the second for each upcoming launch. Clicking into a card opens a slide-in detail drawer that fetches extended vehicle data — total flight history, booster reuse, rocket configuration — without blocking the initial render. The result feels fast because it is: data loads progressively, spinners communicate state, and the experience degrades gracefully when the API is slow.

Under the hood, the project is intentionally lean. No build pipeline beyond a SCSS compiler, no framework, no bundler — just ES modules, native browser APIs, and hand-rolled component logic. The SCSS architecture follows a component-scoped structure that keeps styles predictable as the UI grows.

Accessibility was treated as a first-class concern throughout. The project hits WCAG 2.1 compliance: full keyboard navigation, a properly managed focus trap in the drawer dialog, screen-reader announcements for loading states, skip navigation, and :focus-visible styles that don't punish mouse users.

[Github Repo](https://github.com/b-ry/mission_manifest)