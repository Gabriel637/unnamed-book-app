import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DemoBook from '../../components/DemoBook';
import Loading from '../../components/Loading';
import {
  Container,
  ContainerBooksList,
  StoreItem,
  InfoBook,
  BookTitle,
  BookAuthor,
  BookDescription,
  BookSection,
} from './styles';

function Store({ navigation }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);
  const books = [
    {
      id: 1,
      name: 'Harry Potter',
      author: 'J.K Rowling',
      sections: ['top 100', 'thriller'],
      position: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitae',
    },
    {
      id: 2,
      name: 'Orange Clockwork',
      author: 'Anthony Burgerss',
      sections: ['top 100', 'thriller', 'Sci-Fi'],
      position: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis',
    },
    {
      id: 3,
      name: 'Turma da Monica',
      author: 'Mauricio',
      sections: ['top 100', 'thriller'],
      position: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitae',
    },
    {
      id: 4,
      name: 'Fight Club',
      author: 'David Fincher',
      sections: ['top 100', 'thriller'],
      position: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitae',
    },
  ];

  const booksEmpty = () => {
    return (
      <ContainerAdviceStyled>
        <TextAdviceStyled>
          Você ainda não tem livros {'\n'} salvos na sua biblioteca
        </TextAdviceStyled>
      </ContainerAdviceStyled>
    );
  };

  const book = ({ item }) => {
    return (
      <StoreItem>
        <DemoBook book={item} navigation={navigation} />
        <InfoBook>
          <BookTitle numberOfLines={1} ellipsizeMode="tail">
            {item.position}.{item.name}
          </BookTitle>
          <BookAuthor numberOfLines={1} ellipsizeMode="tail">
            {item.author}
          </BookAuthor>
          <BookSection numberOfLines={1} ellipsizeMode="tail">
            {item.sections[0]} {item.sections[1] && '- ' + item.sections[1]}
            {item.sections[2] && '- ' + item.sections[2]}
          </BookSection>
          <BookDescription numberOfLines={5} ellipsizeMode="tail">
            {item.description}
          </BookDescription>
        </InfoBook>
      </StoreItem>
    );
  };


  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <ContainerBooksList
          showsVerticalScrollIndicator={false}
          data={books}
          keyExtractor={item => item.id}
          ListEmptyComponent={booksEmpty}
          renderItem={book}
        />
      </Container>
    </>
  );
}

export default Store;

Store.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Store.defaultProps = {
  navigation: {},
};
