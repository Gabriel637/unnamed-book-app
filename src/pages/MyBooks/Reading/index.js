import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DemoBook from '../../../components/DemoBook';
import Loading from '../../../components/Loading';
import EmptyState from '../../../components/EmptyState';
import {
  Container,
  ContainerBooksList,
} from './styles';

function MyBooks({ navigation }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  const books = [
    /*     {
          name: 'Harry Potter',
          author: 'J.K Rowling',
          sections: ['top 100', 'thriller'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        },
        {
          name: 'livrinho',
          author: 'gabriel amorim',
          sections: ['top 100', 'romantic'],
        }, */
  ];

  const booksEmpty = () => {
    return (
      <EmptyState text={`There's no books in your library, go to store and add some`} />
    );
  };

  const book = ({ item }) => {
    return <DemoBook book={item} navigation={navigation} />;
  };
  const columns = 3;

  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <ContainerBooksList
          numColumns={columns}
          showsVerticalScrollIndicator={false}
          data={books}
          keyExtractor={item => item.id}
          ListEmptyComponent={booksEmpty}
          renderItem={book}>
        </ContainerBooksList>
      </Container>
    </>
  );
}

export default MyBooks;

MyBooks.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

MyBooks.defaultProps = {
  navigation: {},
};
