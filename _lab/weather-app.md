---
layout: experiment
title: Weather App
featured: true
weight: 0
category: Javascript, ES6
service: 
github-link: https://github.com/b-ry/weatherApp
live-link: weatherApp
teaser-image: labs/weatherapp/teaser.jpg
banner-image: labs/weatherapp/weatherapp-screenshot.png
intro: A little project for freeCodeCamps front-end development program to build a weather app using geo-location and the fetch API.
---

## Project Background

The weather app was one of the final projects for JavaScript Basics section of freeCodeCamps front-end curriculum. It was meant to be a relatively simple little project that exposed you to using AJAX and the HTML5 Geo location. The requirements were to get a response from the Geo location to return an object from the open weather api. Then display several pieces of content like the current temp in both fahrenheit and celsius, weather icon, and location. Lastly create a toggle to change the display from fahrenheit to celsius and back again. 

## Process

This was my first real javascript program. I had written some small functions or event listeners berfore, simple DOM manipulations but nothing thing this complex. I really didn't have a process or know how to shape my code. So, I not only used the example that freeCodeCamp gave as a frame work but also found a couple other projects people had done and used those as helpers to figure this stuff out. 

One thing I noticed when looking at other examples of this project was that a very large number of them were written in jQuery. JQuery is cool but I wasn't trying to learn a library I wanted to learn the source, vanilla javascript. So the examples I found gave some ideas on maybe structuring my code but provided little in the way of actually writting the code.

Things started to finally come together, I was able to get the fetch working, returning an object that I could use to display the content. Then the math to take the temperature and convert it from celsius to fahrenheit, and so on. Then I noticed everything was in one big function. "This isn't right, it can't be". This is where I started to refactor and see how the code could be broken up into smaller more modular functions. Easier to maintain and understand what was happening. A major light bulb went on with this realization. 

Ultimately when I got the required pieces in I wanted to take the whole thing further. I wanted to keep adding things to continue to learn. I wanted to use a different icon set so I created an object and paired the weather condition with a class name. Then passed that into class name into an classList using a template literal. 

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

### Final Solution

After a lot of refactoring and adding some fun bits to make the program more responsive to time of day as well as temp by changing the theme here is a screen shot of the final solution. At least for now.
