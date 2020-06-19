import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo.png';
import { LogoBox, LogoTitle, LogoImage } from './styles';
import { colors } from '../../styles/Colors';

function Logo({ color }) {
    return (
        <LogoBox >
            <LogoImage source={require('../../assets/images/logo.png')} style={{ width: 250, height: 60 }} />
            {/* <LogoTitle color={color}>ALEXANDRIA</LogoTitle> */}
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
