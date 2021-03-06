import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import DemoBook from '../../components/DemoBook';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { MaterialCommunityIcons as Icon } from '../../styles/LoadFonts';
import {
  Container,
  Header,
  SectionText,
  SubText,
  SectionContainer,
  SubTextButton,
} from './styles';

function BoxCollection({ books, section, navigation }) {
  const [booksList, setBooksList] = useState([]);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    findSection();
  }, []);

  const findSection = () => {
    let booksCollection = [];
    books.map(book =>
      book.sections.map(
        bookSection => bookSection === section && booksCollection.push(book),
      ),
    );
    booksCollection.length === 0
      ? setHide(true)
      : setBooksList(booksCollection);
  };

  return (
    <Container hide={hide}>
      <Header>
        <SectionText>{section}</SectionText>
        <SubTextButton>
          <SubText>See all</SubText>
          <Icon
            name="chevron-right"
            size={metrics.widthPercentageToDP(13)}
            color={colors.blue}
          />
        </SubTextButton>
      </Header>
      <SectionContainer horizontal showsHorizontalScrollIndicator={false}>
        {booksList.map(book => (
          <DemoBook book={book} navigation={navigation} />
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
  onPress: () => { },
};

export default BoxCollection;
