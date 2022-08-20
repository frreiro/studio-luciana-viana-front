import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    body{
        --title-font: 'Lexend Peta', sans-serif;
        --body-font: 'Lexend Deca', sans-serif;
        --header-font: 'Inter', sans-serif;
        --main-color: #F7CDB9;
        /* background-color: #F7CDB9; */
        --second-color: #FFF2F2;
        --third-color: #946A56;
        --button-color: #C1896D;
        --image-mobile-height: 110px;
    }
    body *{
        box-sizing: border-box;
        border: none;
    }
    button{
        font-family: var(--body-font);
    }

`;

export default globalStyle;