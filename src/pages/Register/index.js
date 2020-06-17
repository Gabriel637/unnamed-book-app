import PropTypes from 'prop-types';
import React from 'react';
import { Container } from './styles';
import TextInput from '../../components/TextInput';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

function Register({ navigation }) {
  return (
    <Container>
      <Logo />
      <TextInput label="UserName" />
      <TextInput label="Email" />
      <TextInput label="Password" passwordInput />
      <Button text="Sign Up" />
    </Container>
  );
}

export default Register;

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Register.defaultProps = {
  navigation: {},
};
