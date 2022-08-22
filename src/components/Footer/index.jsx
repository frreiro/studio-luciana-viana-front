import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';


export default function Footer({ onClick }) {
    const navigate = useNavigate();
    return (
        <FootContainer onClick={onClick ? onClick : () => navigate('/menu')}>
            <h1>MENU</h1>

        </FootContainer>
    );
}

const FootContainer = styled.footer`
    width: 100vw;
    height: 60px;
    background-color:  ${props => props.backgroundColor ? props.backgroundColor : 'var(--second-color)'};
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px 10px 0 0;

    h1{
        font-family: var(--title-font);
        color: var(--third-color);
        font-size: 16px;
    }
`;