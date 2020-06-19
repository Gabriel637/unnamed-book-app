import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${metrics.widthPercentageToDP(20)}px;
  align-items: center;
  padding: ${metrics.widthPercentageToDP(100)}px 0;
  background: ${colors.lighter2};
  ${dark &&
  css`
    background: ${colors.black};
  `}
`;
