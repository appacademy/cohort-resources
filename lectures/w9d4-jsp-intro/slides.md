# JavaScript Project

---

# Why a JS Project?

---

## Why a JS Project?

- JavaScript is a foundational skill for almost every frontend job

- Practice independence, research, and organization skills

- Opportunity to be creative & explore interests

- Simple but engaging portfolio project to catch recruiters' attention

---

## Agenda

1. What is the JavaScript Project?

2. Examples

3. Considerations & Advice

4. Initial and Final Proposals

---

## The Basics

- Independent and open-ended project

- Due next Thursday after lunch
  - Can layer on more functionality during job search

- Types of Projects:
  - Game 
  - Data Visualization 
  - Demo / Tool

---

## Do's

- **Do**: make it pretty & interactive

- **Do**: make it friendly: include instructions, let sound be paused/muted, etc.

- **Do**: include your name and links to your GitHub & LinkedIn

- **Do**: host on GitHub Pages (or Heroku for projects with a backend)

---

## Don'ts

- **Don't**: use external libraries unless necessary (e.g. no Phaser or jQuery)
  - Rule of Thumb: if you *could* implement it yourself, do implement it yourself!

- **Don't**: make an overly simple / frequently cloned game (snake, asteroids, etc)

- **Don't**: plagiarize!

---

# Examples!

games:

https://towertime.herokuapp.com/
https://amendoza514.github.io/
https://samblyon.github.io/mattressFactory/
https://ashotovich1990.github.io/matroshka/
https://davidoh14.github.io/
https://yuehanh.github.io/the_wizard_of_corgs/

data vis:
https://john-chau.com/DanceMusicDance/
https://ezekielp.com/nutrition_facts_scroller/#anchor-0
https://nba-shot-crunch.herokuapp.com/
http://timhwang21.github.io/shortcut-sloths/#/1?_k=1m0lih
https://jayzizzle.github.io/versus/
https://ginoreyes.me/nbasixdegrees/

---

## Considerations & Resources: Games

  - Will you use [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API), vanilla DOM manipulation, or an external library (such as [three.js](https://threejs.org/)) to render your game?
    - Canvas provides more versatility & control in rendering the game view; good for games with a lot of movement
    - Click handling is usually easier using the DOM

  - How will you handle user input & game logic / physics?
    - Games with physics (collisions, gravity, etc) often involve a fair bit of pixel math

---

## Considerations & Resources: Data Visualizations

  - Where will you source your data? 
    - Is the API you want to use free and not too rate limited?
    - Does it have sufficient, quality data?
    - Test out APIs using Postman!
    - [List of free, public APIs](https://github.com/public-apis/public-apis)

  - How will you parse & visualize this data? 
    - [`D3`](https://d3js.org/) is a great choice for charts and graphs; [`paper.js`](http://paperjs.org/) is another option

---

## Considerations & Resources: Demos/Tools


- What will the user interaction be? How will your project be visually compelling?

- Explore [web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

---

## When To Use a Backend:

1. Your API requires an API key

    - don't want key on the frontend; could be stolen

    - instead, store in a backend and route requests through the server

2. Your API does not support CORS

    - this means requests from the browser are blocked (will get an error in console)

    - must make the request from a backend server

---

## File Structure

![file structure](https://i.postimg.cc/xd3rDbsc/file-structure.png)

---

## Asking Questions


- We will **not** use Progress Tracker for questions during project days!

- Instead, post your questions in the **cohort Slack channel**. Include:
  - a description of the bug / error and when it happens / how you produced it
  - screenshots of your source code (with line numbers), console errors (the whole thing), and (if applicable) whatever is rendering wrong
  - what you have tried & Googled so far

---

## Asking Questions

- Include `[UNRESOLVED]` at the beginning of your question when you post it. 

- Once you get an answer (from someone else *or* from figuring it out yourself), update your question to include at the beginning: `[RESOLVED]: <1 sentence summarizing the solution>`

---

## Final Tips & Reminders

- No impossible games

- Provide clear instructions

- Data should be clearly labelled

- Keep your code organized from the get-go

- Research -- exploring APIs to use, learning a technology, figuring out how to structure your project -- takes time. 
  - For most projects, progress can feel slow in the beginning; that's OK.

---

## Due Tomorrow at 9am: Final Proposal

- Should be in the `README.md` of your project repo

- Should include:
  - Background & Overview 
  - Functionality & MVPs 
  - Wireframes 
  - Technologies
  - Implementation Timeline 

---

## Due This Afternoon: Initial Proposal

- Simple Google Form: a brief, 1 paragraph description of your project idea

- Ensures you leave class with a viable idea to flesh out in your final proposal you tonight
  - It's OK if you change your mind though

---

## Questions?



[canvas]: 
[threejs]: 
[d3]: 
[paperjs]: 
[public-apis]: 
[web-apis]: