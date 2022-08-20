import React from 'react';
import styled from 'styled-components';
import LogoBackground from '../../assets/Logo_c_fundo@4x.png';

export default function LogoWithBackground({ inBanner }) {
    return (
        <>
            {inBanner ?
                <LogoInBanner src={LogoBackground} />
                :
                <LogoOffBanner src={LogoBackground} />
            }
        </>
    );
}

export const LogoInBanner = styled.img`
  height:  var(--image-mobile-height);
  position: absolute;
  top: calc(var(--image-mobile-height) / 2 * -1 );
`;

export const LogoOffBanner = styled.img`
  height:  var(--image-mobile-height);
  margin-bottom: 28px;
`;
