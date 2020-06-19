import styled, { css } from 'styled-components/native';
import { metrics } from '../../styles/Metrics';

export const LogoTitle = styled.Text`
  margin-right:${metrics.widthPercentageToDP(10)}px;
  font-size: ${metrics.widthPercentageToDP(20)}px;
  font-family: papyrus;
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const LogoBox = styled.View`
flex-direction: row;
`;
