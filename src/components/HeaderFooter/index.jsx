import React from 'react';
//import { useNavigate } from 'react-router';
import { Breakpoint } from 'react-socks';
import Footer from '../Footer/index.jsx';
import Header from '../Header/index.jsx';


export default function HeaderFooter({ backgroundColor }) {

	return (
		<>
			<Breakpoint small down>
				<Footer backgroundColor={backgroundColor} />
			</Breakpoint>
			<Breakpoint small up>
				<Header backgroundColor={backgroundColor} />
			</Breakpoint>
		</>
	);
}
