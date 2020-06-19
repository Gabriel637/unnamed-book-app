import styled, { css } from 'styled-components/native';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { Animated } from 'react-native';
import { darkMode } from '../../utils/settingsApp';

const dark = darkMode();

export const Container = styled(Animated.View)`
  background: ${colors.white};
  ${dark &&
  css`
    background: ${colors.black};
    `}
  padding-top:${metrics.widthPercentageToDP(150)}px;
  align-items:center;
  width: ${metrics.widthPercentageToDP(360)}px;
  height: 105%;
`;

export const Box = styled.View`
  justify-content:center;
  align-items:center;
  background: ${colors.beige};
  border-radius: 200px;
  width: ${metrics.widthPercentageToDP(200)}px;
  height: ${metrics.widthPercentageToDP(200)}px;
`;

export const Text = styled.Text`
  font-size:26px;
  color: ${colors.gray2};
  ${dark &&
  css`
      color: ${colors.white};
    `}
`;
