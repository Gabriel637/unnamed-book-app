import styled, { css } from 'styled-components/native';
import { metrics } from '../../styles/Metrics';

export const LogoTitle = styled.Text`
  margin-right:${metrics.widthPercentageToDP(10)}px;
  font-size: ${metrics.widthPercentageToDP(24)}px;
  font-family: Papyrus;
  text-transform: uppercase;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const LogoSymbol = styled.Text`
font-size: ${metrics.widthPercentageToDP(24)}px;
font-family: BodoniOrnamentsITCTT;
text-transform: uppercase;
${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const LogoBox = styled.View`
flex-direction: row;
`;
