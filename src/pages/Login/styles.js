import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import {darkMode} from '../../utils/settingsApp';
import styled, {css} from 'styled-components/native';

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

export const LogoTitle = styled.Text`
  font-size: ${metrics.widthPercentageToDP(32)}px;
  text-transform: uppercase;
  color: ${colors.primary};
  align-self: center;
`;

export const InputBox = styled.View`
  align-items: center;
`;

export const SubText = styled.Text`
  font-size: 14px;
  margin-top: ${metrics.widthPercentageToDP(20)}px;
  color: ${colors.light_blue};
`;
