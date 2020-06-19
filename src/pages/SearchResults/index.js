import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DemoBook from '../../components/DemoBook';
import DemoUser from '../../components/DemoUser';
import MiniTabs from '../../components/MiniTabs';
import Loading from '../../components/Loading';
import EmptyState from '../../components/EmptyState';
import {
  Container,
  ContainerBooksList,
} from './styles';

function SearchResults({ navigation }) {
  const [tab, setTab] = useState(0);
  const [loading, setLoading] = useState(true);

  /* Bug maintaining books when changes to users, when integrates to api, reset data when change tabs maybe the solution */

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
  ];

  const empty = () => {
    return (
      <EmptyState text={`Nothing found, try again with another keyword`} />
    );
  };

  const book = ({ item }) => {
    return <DemoBook book={item} navigation={navigation} />;
  };

  const user = ({ item }) => {
    return <DemoUser user={item} navigation={navigation} />;
  };

  const items = [
    {
      name: 'Books',
      handler: () => {
        setTab(0);
      },
      active: tab == 0 ? true : false,
    },
    {
      name: 'Users',
      handler: () => {
        setTab(1);
      },
      active: tab == 1 ? true : false,
    },
  ];

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


  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <MiniTabs items={items} />
        {tab === 0 ?
          <ContainerBooksList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={books}
            keyExtractor={item => item.id}
            ListEmptyComponent={empty}
            renderItem={book}>
          </ContainerBooksList>
          :
          <ContainerBooksList
            numColumns={3}
            showsVerticalScrollIndicator={false}
            data={users}
            keyExtractor={item => item.id}
            ListEmptyComponent={empty}
            renderItem={user}>
          </ContainerBooksList>}
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
