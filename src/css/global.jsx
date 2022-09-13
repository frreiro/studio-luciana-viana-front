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
		--toastify-color-progress-light: var(--second-color);
		--toastify-z-index: 2147483648;
    }
    body *{
        box-sizing: border-box;
        border: none;
    }
    button{
        font-family: var(--body-font);
    }

    @-webkit-keyframes animate {
        0% {
        }
        100% {
            height: 100vh;
        }
    }

	@-webkit-keyframes animate-rotation {
        0% {
			opacity: 100%;

        }
		50%{
			opacity: 50%;

		}
        100% {
			opacity: 0%;
			rotate: 360deg;
			visibility: hidden;
        }
    }

	@-webkit-keyframes animate-rotation-to-x {
        0% {
			opacity: 0%;

        }
		50%{
			opacity: 50%;

		}
        100% {
			opacity: 100%;
			rotate: 360deg;

        }
    }

`;

export default globalStyle;