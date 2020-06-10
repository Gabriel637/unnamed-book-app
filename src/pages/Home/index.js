import PropTypes from 'prop-types';
import React from 'react';

import BoxCollection from '../../components/BoxCollection';
import {Container} from './styles';

function Home({navigation}) {
  const sections = [
    {
      name: 'top 100',
    },
    {
      name: 'romantic',
    },
    {
      name: 'thriller',
    },
    {
      name: 'action',
    },
    {
      name: 'sci-fi',
    },
  ];

  const books = [
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
  ];
  return (
    <Container>
      {sections.map(section => (
        <BoxCollection books={books} section={section} />
      ))}
    </Container>
  );
}
export default Home;

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Home.defaultProps = {
  navigation: {},
};
