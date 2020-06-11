import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import {darkMode} from '../../utils/settingsApp';
import styled, {css} from 'styled-components/native';

const dark = darkMode();

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 20px;
  ${dark &&
    css`
      background: ${colors.black};
    `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileItem = styled.View`
  flex-direction: column;
  justify-content: center;
`;

export const InfoProfile = styled.View`
  padding: 10px 10px;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProfileSubText = styled.Text`
  padding: 20px 10px 0;
  font-size: 13px;
  text-align: justify;
  align-self: flex-start;
  color: ${colors.primary};
`;

export const ProfileInfoText = styled.Text`
  padding: 20px 10px 0;
  font-size: 14px;
  text-align: justify;
  align-self: flex-start;
  color: ${colors.gray1};
  ${dark &&
    css`
      color: ${colors.white};
    `}
`;

export const ProfileTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  text-transform: capitalize;
  color: ${colors.gray3};
  ${dark &&
    css`
      color: ${colors.white};
    `}
`;

export const ProfileSection = styled.Text`
  font-size: 20px;
  color: ${colors.blue};
  ${dark &&
    css`
      color: ${colors.light_blue};
    `}
  text-transform: capitalize;
  text-align: center;
`;

export const ProfileInfo = styled.Text`
  font-size: 16px;
  color: ${colors.gray1};
  ${dark &&
    css`
      color: ${colors.white};
    `}
  text-align: center;
`;

export const BooksList = styled.ScrollView`
  padding: 10px;
`;

export const IconBox = styled.View`
  flex-direction: row;
  padding: 10px;
`;
