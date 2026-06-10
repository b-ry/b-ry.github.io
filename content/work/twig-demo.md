---
title: Twig Card Component - Demo
weight: 6
external-link: https://bryonurbanec.com/twig-demo/
teaser-image: projects/twig-demo/teaser.png
teaser-alt: Screenshot of food cards UI Kit.
intro: This project is a standalone Twig and PHP prototyping environment for building Drupal components without a full CMS install. The template naming, namespace structure, and Sass patterns mirror Drupal's own conventions so anything built here drops cleanly into a production theme. Built around a food card UI kit to demonstrate accessible, reusable component architecture with CSS custom properties.
tags: PHP, JavaScript, Twig, SCSS
---

- __Drupal-compatible from the start__: I've structured templates, Twig namespaces, and Sass the same way Drupal expects them, so I'm not translating anything when it's time to ship
- __Custom Attribute class shim__: I wrote a PHP class that replicates Drupal's native attributes object so Twig templates behave the same as they would inside a real Drupal environment
- __Sass design token system__: Colors and typography live as CSS custom properties in their own partials, organized the same way a Drupal theme would consume them
- __Accessibility fixes baked in__: The source UI kit had transparent labels on the star ratings and category tags, which created contrast issues over background images. I've given those elements solid backgrounds so they're actually readable
- __One component, two layouts__: The teaser card handles both vertical and horizontal orientations from a single template using a data flag, no duplicated markup needed
- __Builds to static for GitHub Pages__: Compiled output lives in a docs/ folder so the demo is easy to host and share without standing up a server