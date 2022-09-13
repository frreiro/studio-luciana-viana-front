import React from 'react';
import { PopupModal, useCalendlyEventListener } from 'react-calendly';
import createText from '../utils/createText.js';
import { toast } from 'react-toastify';


export default function Calendly({ user, spots, setOpen, openCalendly }) {
	useCalendlyEventListener({
		onEventScheduled: () => toast('Evento marcado com sucesso'),
	});

	const prefill = {
		name: user.name,
		email: user.email,
		'customAnswers': {
			a1: createText(spots),
		},
	};


	return (
		<>
			<PopupModal
				iframeTitle="Calendly Schedule"
				url="https://calendly.com/lucasvfv/epilacao"
				rootElement={document.querySelector('.root')}
				onModalClose={setOpen}
				open={openCalendly}
				prefill={prefill} />
		</>
	);
}



