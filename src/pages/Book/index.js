import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import DemoBook from '../../components/DemoBook';
import {
  Container,
  BookItem,
  InfoBook,
  BookTitle,
  BookAuthor,
  BookDescription,
  BookSection,
} from './styles';

function Book({navigation}) {
  const [tab, setTab] = useState(1);
  const book = {
    id: 1,
    name: 'Harry Potter',
    author: 'J.K Rowling',
    sections: ['top 100', 'thriller'],
    position: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitae',
  };

  return (
    <Container enabled={Platform.OS === 'ios'} behavior="padding">
      <BookItem>
        <DemoBook name={book.name} author={book.author} />
        <InfoBook>
          <BookTitle>{book.name}</BookTitle>
          <BookAuthor numberOfLines={1} ellipsizeMode="tail">
            {book.author}
          </BookAuthor>
          <BookSection numberOfLines={1} ellipsizeMode="tail">
            {book.sections[0]} {book.sections[1] && '- ' + book.sections[1]}{' '}
            {book.sections[2] && '- ' + book.sections[2]}
          </BookSection>
        </InfoBook>
      </BookItem>
      <BookDescription>{book.description}</BookDescription>
    </Container>
  );
}

export default Book;

Book.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Book.defaultProps = {
  navigation: {},
};
