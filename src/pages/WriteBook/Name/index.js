import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import { Container } from './styles';

function NameBook({ navigation }) {
  return (
    <Container>
      <TextInput label="Name" />
      <Button text='Next' handler={() => navigation.navigate("Book's description")} />
    </Container>
  );
}
export default NameBook;

NameBook.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

NameBook.defaultProps = {
  navigation: {},
};
