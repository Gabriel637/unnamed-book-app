import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 20px;
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const BookItem = styled.View`
  height: ${metrics.widthPercentageToDP(180)}px;
  flex-direction: row;
  justify-content: center;
`;

export const InfoBook = styled.View`
  width: ${metrics.widthPercentageToDP(215)}px;
  height: ${metrics.widthPercentageToDP(160)}px;
  padding: 10px 10px;
  align-items: flex-start;
`;

export const BookTitle = styled.Text`
  font-size: 26px;
  text-align: center;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;

export const BookAuthor = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  text-align: center;
`;

export const BookSection = styled.Text`
  font-size: 20px;
  color: ${colors.blue};
  ${dark &&
  css`
      color: ${colors.light_blue};
    `}
  text-transform: capitalize;
  text-align: center;
`;

export const BookInfo = styled.Text`
  font-size: 16px;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
  text-align: center;
`;

export const BookDescriptionBox = styled.ScrollView`
  max-height: ${metrics.widthPercentageToDP(150)}px;
  text-align: justify;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 0.5px;
  margin-bottom: ${metrics.widthPercentageToDP(20)}px;
  ${({ line }) =>
    line &&
    css`
      border-top-color: ${colors.primary};
      border-top-width: 1;
    `}
`;

export const BookDescription = styled.Text`
  font-size: 16px;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
  text-align: justify;
`;

export const ButtonSeparator = styled.Text`
  font-size: 20px;
  margin: 10px 0px;
  color: ${colors.gray1};
  text-align: justify;
  align-self: center;
`;

export const ReviewBox = styled.TouchableOpacity`
  margin-top: ${metrics.widthPercentageToDP(30)}px;
  height: ${metrics.widthPercentageToDP(35)}px;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 0.5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ReviewText = styled.Text`
  font-size: 26px;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
  text-align: justify;
`;
