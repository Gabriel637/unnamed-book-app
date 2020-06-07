import {Animated} from 'react-native';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import styled, {css} from 'styled-components/native';

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
  justify-content: space-between;
  ${({hide}) =>
    hide &&
    css`
      display: none;
    `}
`;

export const TextBox = styled.TouchableOpacity`
  height: ${metrics.widthPercentageToDP(40)}px;
  width: ${metrics.widthPercentageToDP(65)}px;
  margin: 0px 10px;
  align-items: center;
  justify-content: center;
  ${({active}) =>
    active &&
    css`
      border-bottom-color: ${colors.primary};
      border-bottom-width: 1;
    `}
`;

export const TextIcon = styled.Text`
  color: ${colors.primary};
  text-transform: uppercase;
`;
