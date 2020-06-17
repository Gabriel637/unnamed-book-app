import PropTypes from 'prop-types';
import React from 'react';
import { ButtonTouchable, Text, ButtonBox } from './styles';

function Button({ color, disabled, text, outline, handler }) {
  return (
    <ButtonBox>
      <ButtonTouchable color={color} disabled={disabled} outline={outline} onPress={handler}>
        <Text>{text}</Text>
      </ButtonTouchable>
    </ButtonBox>
  );
}

Button.propTypes = {

  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
  handler: PropTypes.func,
};

Button.defaultProps = { navigation: {} };

export default Button;
