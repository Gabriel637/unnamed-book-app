import styled, { css } from 'styled-components/native';
import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';

export const LogoTitle = styled.Text`
  margin-top:${metrics.widthPercentageToDP(10)}px;
  margin-right:${metrics.widthPercentageToDP(10)}px;
  font-size: ${metrics.widthPercentageToDP(36)}px;
  font-family: Papyrus;
  text-transform: uppercase;
  color: ${colors.primary};
  align-self: center;
`;

export const LogoSymbol = styled.Text`
  font-size: ${metrics.widthPercentageToDP(32)}px;
  font-family: BodoniOrnamentsITCTT;
  text-transform: uppercase;
  color: ${colors.primary};
  align-self: center;
`;

export const LogoBox = styled.View`
  flex-direction:row;
`;
