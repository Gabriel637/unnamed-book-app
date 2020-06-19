import React from 'react';
import PropTypes from 'prop-types';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { MaterialCommunityIcons as Icon } from '../../styles/LoadFonts';
import { ProfileBox, ProfileButton, Title, SubTitle } from './styles';

function ProfilePic({ image, navigation }) {
  return (
    <ProfileBox>
      <ProfileButton onPress={() => navigation && navigation.navigate('User')}>
        <Icon
          name="account-circle"
          size={metrics.widthPercentageToDP(100)}
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
  handler: () => { },
};

export default ProfilePic;
