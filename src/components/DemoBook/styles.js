import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const BookBox = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})``;

export const BookButton = styled.TouchableOpacity`
  margin: 0px 10px 10px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lighter};
  border: 1px solid ${colors.gray4};
  ${dark &&
  css`
      background: ${colors.gray1};
      border: 1px solid ${colors.gray1};
    `}
  width: ${metrics.widthPercentageToDP(100)}px;
  height: ${metrics.widthPercentageToDP(160)}px;
`;

export const Title = styled.Text`
  font-size: ${metrics.widthPercentageToDP(20)}px;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.gray2};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;

export const SubTitle = styled.Text`
  font-size: ${metrics.widthPercentageToDP(10)}px;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.gray2};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;
