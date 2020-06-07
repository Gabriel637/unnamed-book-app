import PropTypes from 'prop-types';
import React from 'react';
import {Button, Text, ButtonBox} from './styles';

function Tabs({color, disabled, text, outline}) {
  return (
    <ButtonBox>
      <Button color={color} disabled={disabled} outline={outline}>
        <Text>{text}</Text>
      </Button>
    </ButtonBox>
  );
}

Tabs.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Tabs.defaultProps = {navigation: {}};

export default Tabs;
