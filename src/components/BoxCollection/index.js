import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DemoBook from '../../components/DemoBook';
import {
  Container,
  Header,
  SectionText,
  SubText,
  SectionContainer,
} from './styles';

function BoxCollection({books, section}) {
  const [booksList, setBooksList] = useState([]);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    findSection();
  }, []);

  const findSection = () => {
    let booksCollection = [];
    books.map(book =>
      book.sections.map(
        bookSection =>
          bookSection === section.name && booksCollection.push(book),
      ),
    );
    booksCollection.length === 0
      ? setHide(true)
      : setBooksList(booksCollection);
  };

  return (
    <Container hide={hide}>
      <Header>
        <SectionText>{section.name}</SectionText>
        <SubText>SEE ALL</SubText>
      </Header>
      <SectionContainer horizontal showsHorizontalScrollIndicator={false}>
        {booksList.map(book => (
          <DemoBook name={book.name} />
        ))}
      </SectionContainer>
    </Container>
  );
}

BoxCollection.propTypes = {
  name: PropTypes.string,
  onPress: PropTypes.func,
};

BoxCollection.defaultProps = {
  name: '',
  onPress: () => {},
};

export default BoxCollection;
