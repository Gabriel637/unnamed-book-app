import PropTypes from 'prop-types';
import React from 'react';
import { MaterialCommunityIcons as Icon } from '../../../styles/LoadFonts';
import { colors } from '../../../styles/Colors';
import { metrics } from '../../../styles/Metrics';
import Button from '../../../components/Button';
import { Container, SuccessBox, TextInfo } from './styles';

function SuccessBook({ navigation }) {
  return (
    <Container>
      <SuccessBox>
        <Icon
          name='check'
          size={metrics.widthPercentageToDP(60)}
          color={colors.primary}
        />
      </SuccessBox>
      <TextInfo>You uploaded succesfully your book, share to your friends!</TextInfo>
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
