import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { scrollHandler } from '../../utils/componentsActions';
import DemoBook from '../../components/DemoBook';
import Button from '../../components/Button';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { MaterialCommunityIcons as Icon } from '../../styles/LoadFonts';
import Loading from '../../components/Loading';
import {
  Container,
  BookItem,
  InfoBook,
  BookTitle,
  BookAuthor,
  BookDescription,
  BookSection,
  BookInfo,
  BookDescriptionBox,
  ButtonSeparator,
  ReviewBox,
  ReviewText,
} from './styles';

function Book({ navigation }) {
  const [line, setLine] = useState(false);
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  const book = {
    id: 1,
    name: 'Harry Potter',
    author: 'J.K Rowling',
    sections: ['thriller'],
    language: 'English',
    pages: 101,
    position: 1,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitae',
  };

  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <BookItem>
          <DemoBook book={book} />
          <InfoBook>
            <BookTitle>{book.name}</BookTitle>
            <BookAuthor numberOfLines={1} ellipsizeMode="tail">
              by {book.author}
            </BookAuthor>
            <BookSection numberOfLines={1} ellipsizeMode="tail">
              {book.sections[0]}{book.sections[1] && '- ' + book.sections[1]}
              {book.sections[2] && '- ' + book.sections[2]}
              {book.sections[3] && '- ' + book.sections[3]}
              {book.sections[4] && '- ' + book.sections[4]}
            </BookSection>
            <BookInfo>
              in {book.language}
              {'\n'}
              {book.pages} pages
          </BookInfo>
          </InfoBook>
        </BookItem>
        <BookDescriptionBox
          onScrollBeginDrag={() => setLine(true)}
          onScroll={e => setLine(scrollHandler(e))}
          line={line}>
          <BookDescription>{book.description}</BookDescription>
        </BookDescriptionBox>
        <Button text="read now" />
        <ButtonSeparator>or</ButtonSeparator>
        <Button outline text="add to my library" />
        <ReviewBox onPress={() => navigation.navigate('Reviews')}>
          <ReviewText>Reviews</ReviewText>
          <Icon
            name="chevron-right"
            size={metrics.widthPercentageToDP(30)}
            color={colors.blue}
          />
        </ReviewBox>
      </Container>
    </>
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
