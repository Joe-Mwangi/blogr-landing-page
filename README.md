# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [solution URL]([https://your-solution-url.com](https://joe-mwangi.github.io/blogr-landing-page))

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Vanilla javascript


### What I learned

Learned to remove show-link class from inactive links

```css
.arrow-up{
    transform: rotate(180deg); 
}
.show-links{
    display: flex;
}
```
```js
dropDowns.forEach(dropDown => {
    const parent = dropDown.closest('.list')
    const arrow = parent.querySelector('.arrow')
    const link = parent.querySelector('.link')
    link.addEventListener('click', () => { 
        dropDowns.forEach(item => {
            const parentItem = item.closest('.list')
            const arrowItem = parentItem.querySelector('.arrow')
            if(item !== dropDown) {
                item.classList.remove('show-links')
                arrowItem.classList.remove('arrow-up')
            }
        })
        arrow.classList.toggle('arrow-up')
        dropDown.classList.toggle('show-links')
    })
})
```

