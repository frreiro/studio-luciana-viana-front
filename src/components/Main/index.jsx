import React from 'react';
import styled from 'styled-components';

export default function Main() {
    return (
        <MainTag>
            <h1>Olá</h1>
        </MainTag>
    );
}


const MainTag = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F6CDB9;
`;