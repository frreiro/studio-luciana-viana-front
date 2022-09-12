import React, { useEffect, useContext } from 'react';
// import styled from 'styled-components';
import { TokenContext } from '../../context/tokenContext.jsx';
import { useNavigate } from 'react-router';
import { Container, Title } from '../../css/general.jsx';
import LogOut from '../Header/logout.jsx';
import LogoWithBackground from '../Logo/index.jsx';
import Header from '../Header/index.jsx';


export default function Menu() {
	const navigate = useNavigate();

	const { token } = useContext(TokenContext);

	useEffect(() => {
		if (!token) navigate('/');

	}, []);

	return (
		<>
			<LogOut />
			<Header />
			<Container>
				<LogoWithBackground />
				<Title className="clickable" onClick={() => navigate('/booking')}>
					<h1>AGENDAMENTO</h1>
					<hr />
				</Title>
				<Title className="clickable" onClick={() => navigate('/assessment')}>
					<h1>AVALIAÇÃO</h1>
					<hr />
				</Title>
				<Title className="clickable" onClick={() => navigate('/historic')}>
					<h1>HISTÓRICO</h1>
					<hr />
				</Title>
			</Container>
		</>
	);
}