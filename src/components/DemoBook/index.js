import React from 'react';
import PropTypes from 'prop-types';
import {BooksBox, Title} from './styles';

function Book({name}) {
  return (
    <>
      <BooksBox>
        <Title>{name}</Title>
      </BooksBox>
    </>
  );
}

Book.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
};

Book.defaultProps = {
  name: '',
  onPress: () => {},
};

export default Book;
