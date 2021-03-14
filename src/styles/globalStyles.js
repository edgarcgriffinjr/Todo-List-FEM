import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('http://fonts.googleapis.com/css2?familt=Josefin+Sans');

    :root {
        // font stuff
        --font: 'Josefin Sans';
        --fs-large: 2.5rem;
        --fs-medium: 1.25rem;
        --fs-small: 0.875rem;
        --fw-small: 300;
        --fw-heavy: 700;

        // layout stuff
        --width: max-width: 23.4375rem;

        // colors
        --c-blue: hsl(220, 98%, 61%);
        --c-lin-color: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%));
        

        // light mode
        --l-background: hsl(0, 0%, 98%);
        --l-box: hsl(0, 0%, 100%);
        --l-text-other: hsl(236, 9%, 61%);
        --l-text: hsl(235, 19%, 35%);
        --l-line: hsl(236, 33%, 92%);

        // dark mode
        --d-background: hsl(235, 21%, 11%);
        --d-box: hsl(235, 24%, 19%);
        --d-text: hsl(234, 39%, 85%);
        --d-text-other: hsl(234, 11%, 52%);
        --d-line:  	hsl(237, 14%, 26%);
    }

    * {
        font-family: var(--font);
        font-weight: var(--fw-small);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all .75s ease;
    }

    body {
        height: 100vh;
        background-image: ${({ theme }) => theme.backgroundimage};
        background-size: 100% 20rem;
        background-repeat: no-repeat;
        background-color: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
    }

`;

export default GlobalStyles;

