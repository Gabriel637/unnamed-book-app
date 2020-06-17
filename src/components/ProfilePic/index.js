import React from 'react';
import PropTypes from 'prop-types';
import {metrics} from '../../styles/Metrics';
import {colors} from '../../styles/Colors';
import {MaterialCommunityIcons as Icon} from '../../styles/LoadFonts';
import {ProfileBox, ProfileButton, Title, SubTitle} from './styles';

function ProfilePic({name, author, handler, image}) {
  return (
    <ProfileBox>
      <ProfileButton onPress={handler}>
        <Icon
          name="account-circle"
          size={metrics.widthPercentageToDP(120)}
          color={colors.primary}
          onPress={null}
        />
      </ProfileButton>
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