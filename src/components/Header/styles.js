import {metrics} from '../../styles/Metrics';
import {colors} from '../../styles/Colors';
import styled from 'styled-components/native';

export const HeaderBox = styled.View`
  margin-top: ${metrics.widthPercentageToDP(50)}px;
  width: ${metrics.widthPercentageToDP(328)}px;
  height: ${metrics.widthPercentageToDP(40)}px;
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoTitle = styled.Text`
  font-size: ${metrics.widthPercentageToDP(32)}px;
  text-transform: uppercase;
  color: ${colors.primary};
  align-self: center;
`;
