import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import styled, { css } from 'styled-components/native';

export const ButtonTouchable = styled.TouchableOpacity`
  background-color: ${colors.primary};
  border-radius: 5px;
  padding: ${metrics.widthPercentageToDP(6)}px;
  align-items: center;
  width: ${metrics.widthPercentageToDP(328)}px;
  height: ${metrics.widthPercentageToDP(45)}px;
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
    `}
  ${({ outline }) =>
    outline &&
    css`
      background-color: ${colors.blue};
    `}
`;

export const Text = styled.Text`
  font-size: 22px;
  color: ${colors.white};
  text-align: center;
`;

export const ButtonBox = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  margin-top: ${metrics.widthPercentageToDP(25)}px;
`;
