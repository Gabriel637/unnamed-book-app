import React from 'react';
import PropTypes from 'prop-types';
import {BooksBox, Title, SubTitle} from './styles';

function Book({name, author}) {
  return (
    <>
      <BooksBox>
        <Title>{name}</Title>
        <SubTitle>
          {'\n'} {author}
        </SubTitle>
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
