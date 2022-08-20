import React from 'react';
import styled from 'styled-components';
import LogoBackground from '../../assets/Logo_c_fundo@4x.png';

export default function LogoWithBackground() {
    return (
        <>
            <Logo src={LogoBackground} />
        </>
    );
}

export const Logo = styled.img`
  height:  var(--image-mobile-height);
  position: absolute;
  top: calc(var(--image-mobile-height) / 2 * -1 );
`;