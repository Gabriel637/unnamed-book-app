import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Loading from '../../components/Loading';
import EmptyState from '../../components/EmptyState';
import {
  Container,
  ContainerGenresList,
  GenreBox,
  GenreItem,
  GenreText
} from './styles';

function Genres({ navigation }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  const genres = [
    {
      name: 'thriller',
    },
    {
      name: 'romantic',
    },
    {
      name: 'education',
    },
    {
      name: 'action',
    },
    {
      name: 'adventure',
    },
    {
      name: 'sci-fi',
    },
    {
      name: 'fantasy',
    },
    {
      name: 'help',
    },
    {
      name: 'math',
    },
    {
      name: 'futuristic',
    },
    {
      name: 'programming',
    },
    {
      name: 'languages',
    },
    {
      name: 'sports',
    },
    {
      name: 'comedy',
    },
    {
      name: 'heroes',
    },
    {
      name: 'technology',
    },
  ];

  const genresEmpty = () => {
    return (
      <EmptyState text={`There's no books in your library, go to store and add some`} />
    );
  };

  const genre = ({ item }) => {
    return (
      <GenreBox>
        <GenreItem onPress={() => navigation.navigate('Store')}>
          <GenreText>{item.name}</GenreText>
        </GenreItem>
      </GenreBox>
    );
  };

  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <ContainerGenresList
          showsVerticalScrollIndicator={false}
          data={genres}
          keyExtractor={item => item.id}
          ListEmptyComponent={genresEmpty}
          renderItem={genre}>
        </ContainerGenresList>
      </Container>
    </>
  );
}

export default Genres;

Genres.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Genres.defaultProps = {
  navigation: {},
};
