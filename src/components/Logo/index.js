import React from 'react';
import PropTypes from 'prop-types';
import { LogoBox, LogoTitle, LogoSymbol } from './styles';
import { colors } from '../../styles/Colors';

function Logo({ color }) {
    return (
        <LogoBox >
            <LogoTitle color={color}>alexandria</LogoTitle>
            <LogoSymbol color={color}>er</LogoSymbol>
        </LogoBox>
    );
}

Logo.propTypes = {
    color: PropTypes.any,
    handler: PropTypes.func,
};

Logo.defaultProps = {
    color: colors.primary,
    handler: () => { },
};

export default Logo;
