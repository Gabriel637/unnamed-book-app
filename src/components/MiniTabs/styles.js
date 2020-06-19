import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const TabsBox = styled.View.attrs({
  shadowColor: colors.gray1,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 5,
})`
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${metrics.widthPercentageToDP(360)}px;
  margin-bottom: 10px;
  background: ${colors.white};
  flex-direction: row;
  justify-content: space-around;
  ${({ hide }) =>
    hide &&
    css`
      display: none;
    `}
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const TextBox = styled.TouchableOpacity`
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${metrics.widthPercentageToDP(65)}px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  border-bottom-color: ${colors.white};
  border-bottom-width: 2px;
  ${dark &&
  css`
      border-bottom-color: ${colors.black};
    `}
  ${({ active }) =>
    active &&
    css`
      border-bottom-color: ${colors.primary};
      border-bottom-width: 2px;
    `}
`;

export const TextIcon = styled.Text`
  color: ${colors.gray3};
  ${({ active }) =>
    active &&
    css`
      color: ${colors.primary};
    `}
  text-transform: uppercase;
`;
