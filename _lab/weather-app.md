---
layout: experiment
title: Weather App
featured: true
weight: 0
category: JavaScript, ES6
service: 
github-link: https://github.com/b-ry/weatherApp
live-link: weatherApp
teaser-image: labs/weatherapp/teaser.jpg
banner-image: labs/weatherapp/weatherapp-screenshot.png
intro: A little project for freeCodeCamps front-end development program to build a weather app using geo-location and the fetch API.
---

## Project Background

The weather app was one of the final projects for JavaScript Basics section of freeCodeCamps front-end curriculum. It was meant to be a relatively simple little project that exposed you to using AJAX and HTML5 Geo location. The requirements were to get a response from the Geo location to return an object from the open weather api. Then display several pieces of content like the current temp in both fahrenheit and celsius, weather icon, and location. Lastly create a toggle to change the display from fahrenheit to celsius and back again. 

## Process

This was my first real JavaScript program. I had written some small functions or event listeners before, simple DOM manipulations but nothing this complex. I really didn't have a process or really have a good idea of how to shape my code. So, I not only used the example that freeCodeCamp gave as a frame work but also found a couple other projects people had done and used those as helpers to figure this stuff out. 

One thing I noticed when looking at other examples of this project was that a very large number of them were written in jQuery. JQuery is cool but I wasn't trying to learn a library I wanted to learn the source, vanilla JavaScript. So that examples I found gave some ideas on maybe structuring my code but provided little in the way of actually writing code.

Things started to finally come together, I was able to get the fetch working, returning an object that I could use to display the content. Then the math to take the temperature and convert it from celsius to fahrenheit fell into place. Dang! My code was in one big function. "This isn't right, it can't be". This is where I started to refactor and see how the code could be broken up into smaller more modular functions, easier to maintain and understand what was happening. A major light bulb went on with this realization. 

Ultimately when I got the required pieces in I wanted to take the whole thing further. I wanted to keep adding things to continue to learn. For instance, I wanted to use a different icon set. To do that I imported [Erik Flowers weather icons](http://erikflowers.github.io/weather-icons/) and created an object that paired the weather condition with a class name. Then passed that class name into an ```classList.add()``` using a template literal. You can see how some of this was accomplished from the code examples below.

You can go check out the code in my [github repo](https://github.com/b-ry/weatherApp). And if you would like to see the working program take a look at the [project page]({{site.url}}/weatherApp). Be warned, it may take a few seconds for the Geo location to kick in. 

### Some Code

#### Weather Icon Object

```javascript
let weatherIcon = {
    Clouds: 'wi-cloudy',
    Rain: 'wi-rain',
    Thunderstorm: 'wi-thunderstorm',
    Drizzle: 'wi-sprinkle',
    Mist: 'wi-fog',
    Fog: 'wi-fog',
    Clear: 'wi-day-sunny',
    Snow: 'wi-snow',
    Haze: 'wi-day-haze'
}
```

#### Adding The Class Name To The Dispaly

```javascript
updateDisplay = () => {
  document.querySelector('.wi').classList.add(`${weatherIcon[description]}`);
}
```
