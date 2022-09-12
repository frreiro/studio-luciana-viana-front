import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';


export default function Footer({ backgroundColor }) {
	const navigate = useNavigate();
	const [footerUp, setFooterUp] = useState(false);

	function clickFooter() {
		setFooterUp(true);
		setTimeout(() => navigate('/menu'), 1000);
	}

	return (
		<FootContainer className={footerUp ? 'footer-up' : ''} backgroundColor={backgroundColor} onClick={clickFooter}>
			<h1>MENU</h1>
		</FootContainer>
	);
}

const FootContainer = styled.footer`
    width: 100vw;
    height: 60px;
    
    background-color:  ${props => props.backgroundColor ? props.backgroundColor : 'var(--second-color)'};
    position: fixed;
    bottom: 0;
	left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px 10px 0 0;

    &.footer-up{
        -webkit-animation-name: animate;
        -webkit-animation-duration: 1s;
        -webkit-animation-fill-mode: forwards;
    }

    h1{
        font-family: var(--title-font);
        color: var(--third-color);
        font-size: 16px;
    }
`;