import styled, { css } from 'styled-components/native';
import { metrics } from '../../styles/Metrics';

export const LogoBox = styled.View`
  height:${metrics.widthPercentageToDP(60)}px;
  width:${metrics.widthPercentageToDP(250)}px;
  align-self:flex-start;
  margin-left: ${metrics.widthPercentageToDP(-20)}px;;
  margin-top: ${metrics.widthPercentageToDP(5)}px;
  flex-direction: row;
`;

export const LogoImage = styled.Image`
`;
