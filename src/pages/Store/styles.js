import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${metrics.widthPercentageToDP(20)}px;
  justify-content: center;
  align-items: center;
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const ContainerBooksList = styled.FlatList`
  width: ${metrics.widthPercentageToDP(360)}px;
  padding: 5px;
`;

export const StoreItem = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: ${metrics.widthPercentageToDP(340)}px;
  height: ${metrics.widthPercentageToDP(172)}px;
  background: ${colors.white};
  ${dark &&
  css`
      background: ${colors.black};
    `}
  border-radius: 7px;
  margin: 5px;
  padding: 5px 10px;
  flex-direction: row;
`;

export const InfoBook = styled.View`
  width: ${metrics.widthPercentageToDP(215)}px;
  height: ${metrics.widthPercentageToDP(120)}px;
  align-items: flex-start;
`;

export const BookTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;

export const BookAuthor = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  text-align: center;
`;

export const BookSection = styled.Text`
  font-size: 14px;
  color: ${colors.blue};
  text-transform: capitalize;
  text-align: center;
  ${dark &&
  css`
      color: ${colors.light_blue};
    `}
`;

export const BookDescription = styled.Text`
  font-size: 15px;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
  text-align: justify;
`;
