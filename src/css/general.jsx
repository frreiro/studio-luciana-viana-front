import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh ;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-color: ${props => props.colorInverted ? 'var(--second-color)' : 'var(--main-color)'};
${props => props.customStyle}

p, a{
   font-family: var(--body-font);
    color: var(--third-color);
}

article {
   background-color: ${props => props.colorInverted ? 'var(--main-color)' : 'var(--second-color)'};
}

footer {
   background-color: ${props => props.colorInverted ? 'var(--main-color)' : 'var(--second-color)'};
}

@media(min-width: 600px) {
    height: calc(100vh + 150px);
        
    }

`;

export const CardInner = styled.div`
position: relative;
width: 100%;
height: 100%;
transition: transform 0.8s;
transform-style: preserve-3d;



`;

export const FlipCard = styled.div`
background-color: transparent;

&.show-back ${CardInner}{
    transform: rotateY(180deg);
}

`;

export const Banner = styled.article`
height: 409px;
width: 243px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 10px;
position: relative;

&.show-back{
    transform: rotateY(180deg);
}

a{
    font-family: var(--body-font);
    font-weight: lighter;
    font-size: 10px;
    color: var(--button-color);
    margin-bottom: 40px;
    opacity: 0.7;
}


`;

export const Title = styled.div`
margin-top: ${(props) => props.marginTop ? props.marginTop : 38}px;
font-family: var(--title-font);
color: var(--third-color);
font-size: 16px;
display: flex;
flex-direction: column;
align-items: center;
/* padding: 40px 0 5px 0; */

hr{
    width: 170px;
    height: 2px;
    background-color: var(--third-color);
}

`;