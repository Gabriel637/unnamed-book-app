import React from 'react';
import { LogoBox, LogoTitle, LogoSymbol } from './styles';

function Logo({ }) {
    return (
        <LogoBox>
            <LogoTitle>Liber</LogoTitle>
            <LogoSymbol>er</LogoSymbol>
        </LogoBox>
    );
}

Logo.propTypes = {};

Logo.defaultProps = {};

export default Logo;
