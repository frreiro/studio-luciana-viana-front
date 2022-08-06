import React from 'react';
import styled from 'styled-components';
import Header from '../Header/index.jsx';

export default function Schedule() {
    return (
        <>
            <Header />
            <MainTag>
                <Appointment>
                    <h1>Agendamento</h1>
                    <p>Para realizar um agendamento basta clicar no dia disponíveis, após escolher o dia encontre um horário ideal para você e clique em confirmar</p>
                </Appointment>
                <ScheduleTag>
                    <h2>Digite aqui seu número de telefone celular</h2>
                    <input />
                    <button>ENVIAR</button>
                </ScheduleTag>
            </MainTag>
        </>
    );
}


const MainTag = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    padding: 169px 0px 0 0px;
    `;

const Appointment = styled.div`
    h1{
        /* padding: 0 0 53px 0px; */
        font-size: 40px;
        color: #fff;
        text-align: center;
    }

    p{
        /* padding: 0 0 0 90px; */
        width:320px;
        font-size: 20px;
        color: #fff;
        text-align: center;
    }
`;

const ScheduleTag = styled.div`
    background-color: green;
    display: flex;
    flex-direction: column;
    align-items: center;
     h2{
        /* padding: 0 0 53px 0px; */
        font-size: 30px;
        color: #946A56;
        text-align: center;
    }
    input{
        width:300px;
        height:43px;
        border-radius: 50px;
        margin-bottom: 20px;
    }
    button{
        width: 150px;
        height: 40px;
        color: white;
        font-size: 20px;
        background-color: #946A56;
    }

`;
