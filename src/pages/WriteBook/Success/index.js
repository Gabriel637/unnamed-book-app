import PropTypes from 'prop-types';
import React from 'react';
import LottieView from 'lottie-react-native';
import success from '../../../assets/animations/success.json';
import { MaterialCommunityIcons as Icon } from '../../../styles/LoadFonts';
import { colors } from '../../../styles/Colors';
import { metrics } from '../../../styles/Metrics';
import Button from '../../../components/Button';
import { Container, SuccessBox, TextInfo } from './styles';

function SuccessBook({ navigation }) {
  return (
    <Container>
      <SuccessBox>
        <LottieView source={success} autoPlay loop={false} style={{ width: 200 }} />
      </SuccessBox>
      <TextInfo>Your book was succesfully upload, share to your friends!</TextInfo>
      <Button text='Copy link' handler={() => alert('copied')} />
      <Button text='Go home' outline handler={() => navigation.navigate("Home")} />
    </Container>
  );
}
export default SuccessBook;

SuccessBook.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

SuccessBook.defaultProps = {
  navigation: {},
};
