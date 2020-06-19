import React from 'react';
import PropTypes from 'prop-types';
import { Container, Box, Text } from './styles';
import LottieView from 'lottie-react-native';
import notFound from '../../assets/animations/notFound.json';
import { darkMode } from '../../utils/settingsApp';

function Loading({ text }) {
    const dark = darkMode();

    return (
        <Container>
            <Box>
                <LottieView source={notFound} autoPlay loop={true} resizeMode='cover' style={{ width: 270 }} />
            </Box>
            <Text>{text}</Text>
        </Container>
    );
}

Loading.propTypes = {
    show: PropTypes.bool.isRequired,
};

Loading.defaultProps = {
};

export default Loading;
