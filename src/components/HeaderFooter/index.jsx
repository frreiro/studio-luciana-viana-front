import React from 'react';
//import { useNavigate } from 'react-router';
import { Breakpoint } from 'react-socks';
import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';


export default function HeaderFooter({ backgroundColor }) {

	return (
		<>
			<Breakpoint customQuery="(max-width: 600px) and (min-height: 650px)">
				<Footer backgroundColor={backgroundColor} />
			</Breakpoint>
			<Breakpoint customQuery="(max-height: 650px)">
				<Header backgroundColor={backgroundColor} />
			</Breakpoint>
			<Breakpoint customQuery="(min-width: 600px)">
				<Header backgroundColor={backgroundColor} />
			</Breakpoint>
		</>
	);
}
