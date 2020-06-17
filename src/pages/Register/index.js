import PropTypes from 'prop-types';
import React from 'react';
import { Container, SubText, Panel, FormBox } from './styles';
import TextInput from '../../components/TextInput';
import { colors } from '../../styles/Colors';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import { darkMode } from '../../utils/settingsApp';

function Login({ navigation }) {
  const dark = darkMode();

  return (
    <Container>
      <Panel />
      <Logo color={dark ? colors.primary : colors.white} />
      <FormBox>
        <TextInput label="UserName" />
        <TextInput label="Email" />
        <TextInput label="Password" passwordInput />
        <Button text="Sign Up" />
        <SubText>Signing up you agree to terms and registers</SubText>
      </FormBox>
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
