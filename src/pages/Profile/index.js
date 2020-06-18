import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ProfilePic from '../../components/ProfilePic';
import DemoBook from '../../components/DemoBook';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { darkMode } from '../../utils/settingsApp';
import { MaterialCommunityIcons as Icon } from '../../styles/LoadFonts';
import Loading from '../../components/Loading';
import {
  Container,
  HeaderProfile,
  ProfileItem,
  InfoProfile,
  ProfileTitle,
  ProfileSubText,
  BooksList,
  IconBox,
  ProfileInfoText,
} from './styles';

function Profile({ navigation }) {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  const dark = darkMode();
  const user = {
    id: 1,
    name: 'Gabriel amorim barbosa',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitaeLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur',
    language: 'English',
    pages: 101,
    position: 1,
  };

  const books = [
    {
      name: 'Harry Potter',
      author: 'Gabriel',
      sections: ['top 100', 'thriller'],
    },
    {
      name: 'livrinho',
      author: 'gabriel amorim',
      sections: ['top 100', 'romantic'],
    },
  ];

  return (
    <>
      {loading && <Loading show={loading} />}
      <Container>
        <HeaderProfile>
          <ProfilePic></ProfilePic>
          <IconBox>
            <Icon
              padding={10}
              name="weather-night"
              size={metrics.widthPercentageToDP(35)}
              color={dark ? colors.primary : colors.gray3}
              onPress={null}
            />
          </IconBox>
        </HeaderProfile>
        <ProfileItem>
          <ProfileSubText>Name</ProfileSubText>
          <InfoProfile>
            <ProfileTitle>{user.name}</ProfileTitle>
            <Icon
              name="pencil"
              size={metrics.widthPercentageToDP(22)}
              color={colors.gray3}
              onPress={null}
            />
          </InfoProfile>
          <ProfileSubText>Written Books</ProfileSubText>
          <BooksList horizontal showsHorizontalScrollIndicator={true}>
            {books.map(book => (
              <DemoBook book={book} navigation={navigation} />
            ))}
          </BooksList>
          <ProfileSubText>About</ProfileSubText>
          <ProfileInfoText>{user.description}</ProfileInfoText>
        </ProfileItem>
      </Container>
    </>
  );
}

export default Profile;

Profile.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Profile.defaultProps = {
  navigation: {},
};
