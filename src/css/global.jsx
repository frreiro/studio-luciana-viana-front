import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    body{
        box-sizing: border-box;
        --title-font: 'Lexend Peta', sans-serif;
        --body-font: 'Lexend Deca', sans-serif;
        background-color: #F7CDB9;
        --second-color: #FFF2F2;
        --third-color: #946A56;
        --button-color: #C1896D;
    }
    button{
        font-family: var(--body-font);
    }

`;

export default globalStyle;