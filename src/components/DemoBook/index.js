import React from 'react';
import PropTypes from 'prop-types';
import {BookBox, BookButton, Title, SubTitle} from './styles';

function Book({book, handler}) {
  return (
    <BookBox>
      <BookButton onPress={handler}>
        <Title>{book.name}</Title>
        <SubTitle>
          {'\n'} {book.author}
        </SubTitle>
      </BookButton>
    </BookBox>
  );
}

Book.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
};

Book.defaultProps = {
  name: '',
  handler: () => {},
};

export default Book;
