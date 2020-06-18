import React from 'react';
import PropTypes from 'prop-types';
import { BookBox, BookButton, Title, SubTitle } from './styles';

function DemoBook({ navigation, book, handler }) {
  return (
    <BookBox>
      <BookButton onPress={() => navigation && navigation.navigate('Book')}>
        <Title>{book.name}</Title>
        <SubTitle>
          {'\n'} {book.author}
        </SubTitle>
      </BookButton>
    </BookBox>
  );
}

DemoBook.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
};

DemoBook.defaultProps = {
  name: '',
  handler: () => { },
};

export default DemoBook;
