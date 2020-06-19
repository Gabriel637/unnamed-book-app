import styled, { css } from 'styled-components/native';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { Animated } from 'react-native';
import { darkMode } from '../../utils/settingsApp';

const dark = darkMode();

export const Container = styled(Animated.View)`
  height: ${metrics.widthPercentageToDP(500)}px;
  justify-content:center;
  align-items:center;
  width: 100%;
`;

export const Box = styled.View`
  justify-content:center;
  align-items:center;
  border-radius: 200px;
  background: ${colors.transparent};
  ${dark &&
  css`
    background: ${colors.primary};
    `}
  width: ${metrics.widthPercentageToDP(200)}px;
  height: ${metrics.widthPercentageToDP(200)}px;
`;

export const Text = styled.Text`
  margin-top:${metrics.widthPercentageToDP(20)}px;
  text-align:center;
  font-size:22px;
  color: ${colors.gray1};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;
