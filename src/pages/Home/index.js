import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BoxCollection from '../../components/BoxCollection';
import Loading from '../../components/Loading';
import { Container } from './styles';

function Home({ navigation }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  const sections = [
    {
      name: 'romantic',
    },
    {
      name: 'thriller',
    },
    {
      name: 'education',
    },
    {
      name: 'sci-fi',
    },
  ];

  const books = [
    {
      name: 'Harry Potter',
      author: 'J.K Rowling',
      sections: ['thriller'],
    },
    {
      name: 'livrinho',
      author: 'gabriel amorim',
      sections: ['romantic'],
    },
    {
      name: 'livrinho',
      author: 'gabriel amorim',
      sections: ['education'],
    },
  ];
  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        {sections.map((section) => (
          <BoxCollection books={books} section={section.name} navigation={navigation} />
        ))}
      </Container>
    </>
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
