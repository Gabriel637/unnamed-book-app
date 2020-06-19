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

export const ContainerGenresList = styled.FlatList`
  width: ${metrics.widthPercentageToDP(328)}px;
  padding: 5px;
`;

export const TextStyled = styled.Text`
  font-size: 30;
  text-align: center;
  padding: 0px 30px;
`;

export const GenreBox = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
})``;

export const GenreItem = styled.TouchableOpacity`
  width: 100%;
  height: ${metrics.widthPercentageToDP(40)}px;
  margin: 10px 0;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  background-color: ${colors.lighter};
  border: 1px solid ${colors.gray4};
  ${dark &&
  css`
      background: ${colors.gray1};
      border: 1px solid ${colors.gray1};
    `}
`;

export const GenreText = styled.Text`
  font-size: ${metrics.widthPercentageToDP(18)}px;
  text-transform: capitalize;
  color: ${colors.gray2};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;
