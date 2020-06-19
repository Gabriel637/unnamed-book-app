import React from 'react';
import PropTypes from 'prop-types';
import ProfilePic from '../ProfilePic';
import { Box, Button, Title } from './styles';

function DemoUser({ navigation, user, handler }) {
  return (
    <Box>
      <Button onPress={() => navigation && navigation.navigate('User')}>
        <ProfilePic navigation={navigation} />
        <Title>{user.name}</Title>
      </Button>
    </Box>
  );
}

DemoUser.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
};

DemoUser.defaultProps = {
  name: '',
  handler: () => { },
};

export default DemoUser;
