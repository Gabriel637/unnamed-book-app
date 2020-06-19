import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DemoUser from '../../../components/DemoUser';
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

  const empty = () => {
    return (
      <EmptyState text={`Nothing found, try again with another keyword`} />
    );
  };

  const users = [
    {
      id: 1,
      name: 'Dudu',
    },
    {
      id: 2,
      name: 'Weverton',
    },
    {
      id: 3,
      name: 'Gustavo Gomez',
    },
    {
      id: 4,
      name: 'Gabriel Verón',
    },
  ];

  const user = ({ item }) => {
    return <DemoUser user={item} navigation={navigation} />;
  };

  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <ContainerBooksList
          numColumns={3}
          showsVerticalScrollIndicator={false}
          data={users}
          keyExtractor={item => item.id}
          ListEmptyComponent={empty}
          renderItem={user}>
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
