import PropTypes from 'prop-types';
import React from 'react';
import {Container, SubText, LogoTitle} from './styles';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

function Login({navigation}) {
  return (
    <Container>
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

export default Login;

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Login.defaultProps = {
  navigation: {},
};
