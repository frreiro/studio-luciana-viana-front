import React, { } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';

export default function Header({ backgroundColor }) {

	const navigate = useNavigate();
	const location = useLocation();
	const pathname = location.pathname;


	return (
		<HeaderContainer backgroundColor={backgroundColor}>
			<ion-icon name="menu-outline" className={pathname === '/menu' ? 'gone' : ''} onClick={() => navigate('/menu')}></ion-icon>
			{pathname === '/menu' ?
				<ion-icon name="close-outline" className={pathname === '/menu' ? 'appear' : ''} onClick={() => navigate(-1)}></ion-icon>
				:
				<></>
			}
		</HeaderContainer >
	);
}

const HeaderContainer = styled.header`
    position: fixed;
    top:50px;
    left: 50px;
	z-index: 1;
	
	ion-icon{
		position: absolute;
		top: 0;
		left:0;
		font-size: 50px;
		color: ${props => props.backgroundColor ? props.backgroundColor : 'var(--third-color)'};
		cursor: pointer;
	}



	ion-icon[className=gone]{
		-webkit-animation-name: animate-rotation;
		-webkit-animation-duration: 1s;
		-webkit-animation-fill-mode: forwards;
	}

	ion-icon[className=appear]{
		-webkit-animation-name: animate-rotation-to-x;
		-webkit-animation-duration: 1s;
		-webkit-animation-fill-mode: forwards;
	}


`;
