import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const Container = styled.KeyboardAvoidingView.attrs(
  Platform.OS === 'ios' && {
    behavior: 'padding',
    keyboardVerticalOffset: metrics.widthPercentageToDP(20),
    enabled: true,
  },
)`
  flex: 1;
  justify-content: center;
  align-items: center;
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;
