import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';
import RadioForm from './radioForm.jsx';

export default function Booking() {
    return (
        <>
            <Header />
            <MainTag>
                <AppointmentBanner>
                    <h1 className='title'>AGENDAMENTO</h1>
                    <hr />
                    <p className='subtitle'>Escolha o procedimento:</p>
                    <RadioForm />
                </AppointmentBanner>
            </MainTag>
        </>
    );
}


const MainTag = styled.div`
    padding: 108px 0px 0 47px;
    `;


const AppointmentBanner = styled.article`
    width: 500px;
    height: 710px;
    background-color: var(--second-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;

    .title{
        font-family: var(--title-font);
        color: var(--third-color);
        font-size: 30px;
        padding: 74px 0 5px 0;
    }

    hr{
        width: 230px;
        height: 2px;
        background-color: var(--third-color);
        margin-bottom: 89px;
    }

    p{
        font-family: var(--body-font);
        color: var(--third-color);
        font-weight: 300;

    }

    .subtitle{
        font-size: 30px;
    }
`;


