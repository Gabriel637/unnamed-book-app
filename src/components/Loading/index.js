import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Text } from './styles';
import LottieView from 'lottie-react-native';
import shining from '../../assets/animations/shining.json';
import loadingBlack from '../../assets/animations/loadingBlack.json';
import loadingWhite from '../../assets/animations/loadingWhite.json';
import { darkMode } from '../../utils/settingsApp';
import { Animated } from 'react-native';

function Loading({ show }) {
    const dark = darkMode();

    return (
        <Container show={show}>
            <Box>
                <LottieView source={shining} autoPlay loop={true} style={{ width: 300 }} />
            </Box>
            <LottieView source={dark ? loadingWhite : loadingBlack} autoPlay loop={true} style={{
                width: 100
            }} />
        </Container>
    );
}

Loading.propTypes = {
    show: PropTypes.bool.isRequired,
};

Loading.defaultProps = {
};

export default Loading;
