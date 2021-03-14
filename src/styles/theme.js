import dark from '../images/bg-desktop-dark.jpg';
import light from '../images/bg-desktop-light.jpg'

export const lightTheme = {
    backgroundimage: `url(${light})`, // background image
    background: 'var(--l-background)', // rest of the background color
    text: 'var(--l-text)', // main text color and hover states on bottom text
    text2: 'var(--l-text-other)', // text color for strikethrough, X, and placeholders
    box: 'var(--l-box)', // color of todo list background
    line: 'var(--l-line)', // color of divider in box
}
export const darkTheme = {
    backgroundimage: `url(${dark})`, // background image
    background: 'var(--d-background)', // rest of the background color
    text: 'var(--d-text)', // main text color and hover states on bottom text
    text2: 'var(--l-text-other)', // text color for strikethrough, X, and placeholders
    box: 'var(--d-box)', // color of todo list background
    line: 'var(--d-line)', // color of divider in box
}

