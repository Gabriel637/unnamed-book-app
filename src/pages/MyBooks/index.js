import PropTypes from 'prop-types';
import React from 'react';
import {Platform, Text, TouchableOpacity, Alert} from 'react-native';
import {Container, BoxCollection} from './styles';

function Page1({navigation}) {
  return (
    <Container enabled={Platform.OS === 'ios'} behavior="padding">
      <Text>MyBooks</Text>
    </Container>
  );
}
export default Page1;

Page1.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Page1.defaultProps = {
  navigation: {},
};
