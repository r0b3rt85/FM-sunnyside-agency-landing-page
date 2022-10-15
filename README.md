# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This is my initial solution to the Sunnyside agency landing page solution. The time given to the project was two days. This is because I am still new to coding and needed time to research and test my code. The main areas of dificulty was using vanilla Javascript to manipulate the DOM. I ended up working out a simple solution.

### Screenshot

![My Solution](images/SOLUTION%20-%20Screenshot.png)

Above is a screenshot of the live website with the completed solution.

### Links

- Solution URL: [https://github.com/r0b3rt85/FM-sunnyside-agency-landing-page](https://github.com/r0b3rt85/FM-sunnyside-agency-landing-page)
- Live Site URL: [https://fm-sunnyside-agency-landing-page-omega.vercel.app](https://fm-sunnyside-agency-landing-page-omega.vercel.app)

## My process

There were a couple of stages that I used to complete this solution, they are:

1. Create a GIT repository for the files to be saved and later published.
2. Import the design files into Figma to help with the sizing (padding, radius, sizing, etc...)
3. Define my CSS variables by using the style guide as a reference.
4. Go back and forth with the CSS definitions and nesting HTML content to show a useable structure.
5. Commit the final code to my Git repository and publish on Vercel.
6. Write the README.md with the steps I took.

### Built with

- HTML5 markup
- CSS custom properties
  - Grid
  - Media queries
  - Variable definitions
- Desktop-first workflow
- [Figma](https://figma.com/) - Design and sizing
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - For CSS reference

### What I learned

When I was creating the solution to this challenge I really wanted to try and include CSS grids and positions. This is something that I wanted to learn more about and impliment in one of my projects.

Below is how I managed to define the different areas of the grid for a 1, 2 or 3 column layout:

```css
.col-1 {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.col-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
}

.col-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}
```

I have also managed to add a hidden navigation when the screen is on mobile and below 1000px. The additional javascript needed for this proved tricky at first. I managed to find a simple solution as I do not want to use jQuery or othe libraries until I understood what was going on under the surface.

Below is the code used to toggle the navigation on and off:

```js
// Navigation toggle
const navOpen = () => {
  const navButton = document.getElementById('nav-button');
  const nav = document.getElementById('nav-items')

  navButton.addEventListener("click", () => {
    nav.classList.toggle('show');
  });
};
navOpen();
```

### Continued development

I would like to add CSS animations to the navigation dropdown and subtle micro-interactions to the page elements. This includes the arrow and button highlights.

Additional work needs to go into the shape of the 'Learn More' highlights.

### Useful resources

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) - This helped me understand how variables can be defined and used within CSS files. I really liked using this technique to define my main styles in an easy format.

## Author

- Website - [Under Construction]()
- Frontend Mentor - [@r0b3rt85](https://www.frontendmentor.io/profile/r0b3rt85)
- GitHub - [@r0b3rt85](https://github.com/r0b3rt85)

## Acknowledgments

Thank you to Frontend Mentors for providing an extensive range of resources to help new developers access projects based around web development.
