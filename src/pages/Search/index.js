import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';
import { Container } from './styles';

function Search({ navigation }) {
  return (
    <Container>
      <TextInput label="Search" autoFocus />
      <Button text='Search' handler={() => navigation.navigate("SearchResult")} />
    </Container>
  );
}
export default Search;

Search.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Search.defaultProps = {
  navigation: {},
};
