# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size 
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list // This has not been implemented but will be in the future when I have more time to work on this project

### Screenshot

![](./src/images/screenshot.png)

### Links

- Solution URL: [GitHub Repo](https://github.com/edgarcgriffinjr/Todo-List-FEM)
- Live Site URL: [Vercel Site](https://todo-list-fem.vercel.app/)

## My process

This was a tedious task for me because it caused me to read lots of documentation on styled-components because I am still in the process of mastering them. I decided to use them because of how easy potentially adding themes would be. 

### Built with

- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

This was a pretty enticing challenge for me and forced me to learn quite a bit about Maps, Set, and Array functions. I challenged myself this time to use  [Styled Components](https://styled-components.com/) which presented a challenge of its own but still fun none the less. 

The array filtering function was one of the functions that presented a ton of value because it showed that despite using OOP I could still filter based upon certain parameters in the the object whether integer, string portion, or boolean.

```js
// filters all incomplete tasks in array
const showActive = () => {
    filteredList = taskList.filter(item => item.isComplete === false)
    console.log(filteredList)
}
```

Another important portion of this project was the onclick functions along with conditional class using in-line functions to specify whether classes were complete or incomplete. 

```html
/* this is an example of a condition className using an if 
function as well as a inline function that passes a variable out */
<div 
  className={taskList[index].isComplete ? 'complete' : 'incomplete'} 
  onClick={() => toggleComplete(index)}>  
  <Check />
</div>
```

## Author

- Website - [Edgar Griffin](https://edgargriffin.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/edgarcgriffinjr)
- LinkedIn - [Edgar Griffin](https://www.linkedin.com/in/edgarcgriffinjr/)
