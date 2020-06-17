import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const Container = styled.KeyboardAvoidingView.attrs(
  Platform.OS === 'ios' && {
    behavior: 'padding',
    keyboardVerticalOffset: metrics.widthPercentageToDP(10),
    enabled: true,
  },
)`
  flex: 1;
  padding: ${metrics.widthPercentageToDP(50)}px 0;
  justify-content: center;
  align-items: center;
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const Panel = styled.View`
  width: ${metrics.widthPercentageToDP(360)}px;
  height: ${metrics.widthPercentageToDP(400)}px;
  border-radius: 15px;
  position: absolute;
  top:0;
  background: ${colors.primary};
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const FormBox = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
})`
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: ${metrics.widthPercentageToDP(10)}px;
  background: ${colors.white};
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const InputBox = styled.View`
  align-items: center;
`;

export const SubText = styled.Text`
  font-size: 14px;
  margin-top: ${metrics.widthPercentageToDP(20)}px;
  color: ${colors.light_blue};
`;
