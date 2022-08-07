import React from 'react';
import { InlineWidget } from 'react-calendly';
import createText from '../utils/createText.js';

export default function Calendly({ user, spots }) {
    const prefill = {
        name: user.name,
        email: user.email,
        'customAnswers': {
            a1: createText(spots),
        },
    };

    return (
        <>
            <InlineWidget
                iframeTitle="Calendly Schedule"
                url="https://calendly.com/lucasvfv/30min"
                styles={StyleSheet}
                prefill={prefill} />
        </>
    );
}


const StyleSheet = {
    'width': 'calc(100vw - 900px)',
    'height': '710px',
    'marginLeft': '50px',
    'borderRadius': '10px',
};


