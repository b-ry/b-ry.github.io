---
layout: experiment
title: Dribbble Experiment 1
featured: true
weight: 1
category: CSS3
service: 
github-link: 
live-link: 
teaser-image: labs/dribbble/experiment-1-teaser.png
banner-image: labs/dribbble/dribbble-experiment-1-banner.png
intro: The best way to learn new stuff is to just build things.
---

CSS animations are awesome and I wanted to learn more about them. I had come across a codepen.io post by [Vangel Tzo](https://codepen.io/srekoble/pen/RLpNVJ) which pretty blew my mind. I needed to do something like that. I searched dribbble.com for something that would be a good candidate. Finally I came across [Tiny Books](https://dribbble.com/shots/1212096-Tiny-Books) by [Paddy Donnelly](https://dribbble.com/paddy), This was a perfect micro project. I immediately jumped into codepen.io and began marking it up. This is the result. 


<div class="embed">
  <p data-height="500" data-theme-id="0" data-slug-hash="oGMQgQ" data-default-tab="css,result" data-user="b-ry" data-pen-title="Two Planets" class="codepen">See the Pen <a href="https://codepen.io/b-ry/pen/oGMQgQ/">Two Planets</a> by Bryon (<a href="https://codepen.io/b-ry">@b-ry</a>) on <a href="https://codepen.io">CodePen</a>.</p>
  <script async src="https://static.codepen.io/assets/embed/ei.js"></script>
</div>

Outside of the relatively simple rotating animation I also got to use a for loop in scss, which I generally don't see too many uses for. 

```css
@for $i from 1 through 2 {
  
  .moon-#{$i} {
    animation: orbit-#{$i} 5s * $i linear infinite;
  }
  
  @keyframes orbit-#{$i} {
    from { transform: rotate(0deg) translateX(150px + 0px * $i) rotate(0deg)      }
    to   { transform: rotate(360deg) translateX(150px + 0px * $i) rotate(-360deg) }
  } 
}
```