import React from 'react';
import styled from 'styled-components';
import logoStudio from '../../assets/logo_studio_4x.png';

export default function Header() {
    return (
        <HeaderTag>
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
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

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

