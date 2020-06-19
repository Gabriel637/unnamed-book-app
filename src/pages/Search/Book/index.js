import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DemoBook from '../../../components/DemoBook';
import Loading from '../../../components/Loading';
import EmptyState from '../../../components/EmptyState';
import {
  Container,
  ContainerBooksList,
} from './styles';

function SearchResults({ navigation }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  const books = [
    {
      name: 'Harry Potter',
      author: 'J.K Rowssling',
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
  ];

  const empty = () => {
    return (
      <EmptyState text={`Nothing found, try again with another keyword`} />
    );
  };

  const book = ({ item }) => {
    return <DemoBook book={item} navigation={navigation} />;
  };

  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <ContainerBooksList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={books}
          keyExtractor={item => item.id}
          ListEmptyComponent={empty}
          renderItem={book}>
        </ContainerBooksList>
      </Container>
    </>
  );
}

export default SearchResults;

SearchResults.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

SearchResults.defaultProps = {
  navigation: {},
};
