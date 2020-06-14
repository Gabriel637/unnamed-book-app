import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../components/Button';
import TextArea from '../../../components/TextArea';
import {Container} from './styles';

function DescriptionBook({navigation}) {
  return (
    <Container>
      <TextArea label="Description" autoFocus />
      <Button text='NEXT'/>
    </Container>
  );
}
export default DescriptionBook;

DescriptionBook.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

DescriptionBook.defaultProps = {
  navigation: {},
};
