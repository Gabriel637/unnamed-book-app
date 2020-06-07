import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Platform} from 'react-native';
import DemoBook from '../../components/DemoBook';
import MiniTabs from '../../components/MiniTabs';
import {
  Container,
  ContainerBooksList,
  ContainerAdvice,
  TextAdvice,
} from './styles';

function MyBooks({navigation}) {
  const [tab, setTab] = useState(1);
  const books = [
    /* 
    {
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
      <ContainerAdvice>
        <TextAdvice>you don't have any book {'\n'} in your library</TextAdvice>
      </ContainerAdvice>
    );
  };

  const book = ({item}) => {
    return <DemoBook name={item.name} author={item.author} />;
  };
  const columns = 3;

  const items = [
    {
      name: 'Reading',
      handler: () => {
        setTab(0);
      },
      active: tab == 0 ? true : false,
    },
    {
      name: 'All',
      handler: () => {
        setTab(1);
      },
      active: tab == 1 ? true : false,
    },
    {
      name: 'Writings',
      handler: () => {
        setTab(2);
      },
      active: tab == 2 ? true : false,
    },
  ];
  return (
    <Container enabled={Platform.OS === 'ios'} behavior="padding">
      <MiniTabs items={items} />
      <ContainerBooksList
        numColumns={columns}
        showsVerticalScrollIndicator={false}
        data={books}
        keyExtractor={item => item.cpf}
        ListEmptyComponent={booksEmpty}
        renderItem={book}></ContainerBooksList>
    </Container>
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
