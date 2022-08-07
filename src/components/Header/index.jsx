import React from 'react';
import styled from 'styled-components';
import logoStudio from '../../assets/logo_studio_4x.png';

export default function Header() {
    return (
        <HeaderTag>
            <NavBar>
                <p className='agendamento'>AGENDAMENTO</p>
                <p className='procedimento'>PROCEDIMENTOS</p>
                <hr />
                <p className='historico'>HISTÓRICO</p>
                <p className='avaliacao'>AVALIAÇÃO</p>
            </NavBar>
            <LogoTag>
                <img src={logoStudio} />
            </LogoTag>
        </HeaderTag>

    );
}


const HeaderTag = styled.header`
    width: 100vw;
    height: 90px;
    background-color: #FFF2F2;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    `;


const LogoTag = styled.div`

img{
    width: 170px;
    height:172px;
    position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 27px;
        left: 0;
        right: 0;
        text-align: center;
    }
    `;

const NavBar = styled.nav`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 70px 20px 0 20px;

    p{
        font-family: var(--header-font);
        font-weight: 400;
        font-size: 15px;
        color: var(--third-color);
        cursor: pointer;
    }

    hr{
        width: 10px;
        margin: 0;
        visibility: hidden;
    }

`;