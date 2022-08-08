
import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';
import HistoricForm from './form.jsx';

export default function Booking() {

    function onSubmit(data) {
        console.log(data);

    }

    return (
        <>
            <Header />
            <MainTag>
                <HistoricBanner>
                    <h1 className='title'>HISTÓRICO</h1>
                    <hr />
                    <HistoricForm onSubmit={onSubmit} />
                </HistoricBanner>
            </MainTag>
        </>
    );
}


const MainTag = styled.div`
    width: 100vw;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    padding: 108px 47px 0 47px;
    position: relative;



    p{
        font-family: var(--body-font);
        color: var(--third-color);
    }

    .side-text{

        font-family: var(--title-font);
        font-size: 25px;
        text-align: center;
        line-height: 40px;
    }
    `;


const HistoricBanner = styled.article`
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
        margin-bottom: 12px;
    }


    .subtitle{
        font-size: 30px;
    }
`;

