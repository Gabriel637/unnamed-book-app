import React from 'react';
import PropTypes from 'prop-types';
import {BookBox, BookButton, Title, SubTitle} from './styles';

function Book({name, author, handler}) {
  return (
    <BookBox>
      <BookButton onPress={handler}>
        <Title>{name}</Title>
        <SubTitle>
          {'\n'} {author}
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
