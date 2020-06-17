import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../components/Button';
import TextInput from '../../../components/TextInput';
import {Container} from './styles';

function LanguageBook({navigation}) {
  return (
    <Container>
      <TextInput label="Language" autoFocus />
      <Button text='NEXT'/>
    </Container>
  );
}
export default LanguageBook;

LanguageBook.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

LanguageBook.defaultProps = {
  navigation: {},
};