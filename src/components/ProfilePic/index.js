import React from 'react';
import PropTypes from 'prop-types';
import {ProfileBox, ProfileButton, Title, SubTitle} from './styles';

function ProfilePic({name, author, handler}) {
  return (
    <ProfileBox>
      <ProfileButton onPress={handler}></ProfileButton>
    </ProfileBox>
  );
}

ProfilePic.propTypes = {
  name: PropTypes.string,
  handler: PropTypes.func,
};

ProfilePic.defaultProps = {
  name: '',
  handler: () => {},
};

export default ProfilePic;
