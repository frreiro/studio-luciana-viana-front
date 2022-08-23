import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

export default function Header() {

    const navigate = useNavigate();
    function removeToken() {
        localStorage.removeItem('studio-token');
        localStorage.removeItem('userData');
        navigate('/');
    }

    return (
        <HeaderTag>
            <ion-icon onClick={removeToken} name="exit-outline"></ion-icon>
        </HeaderTag>
    );
}

const HeaderTag = styled.header`
    position: absolute;
    top:30px;
    right: 30px;

    ion-icon{
        font-size: 25px;
        color: var(--third-color);
    }
`;
