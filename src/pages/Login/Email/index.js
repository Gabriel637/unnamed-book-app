import PropTypes from 'prop-types';
import React from 'react';
import {Platform} from 'react-native';
import {
  Container,
  SubText,
  LogoTitle,
  RegisterBox,
  RegisterText,
} from './styles';
import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

function Email({navigation}) {
  return (
    <Container enabled={Platform.OS === 'ios'} behavior="padding">
      <LogoTitle>Liber</LogoTitle>
      <TextInput label="Email" />
      <TextInput label="Password" passwordInput />
      <Button text="Log In" />
      <SubText onPress={() => alert(1)}>Enter as guest</SubText>
      <SubText>Forgot password</SubText>
      <SubText>Don't have an account yet? Sign Up</SubText>
    </Container>
  );
}

export default Email;

Email.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Email.defaultProps = {
  navigation: {},
};
