import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

const dark = darkMode();

export const HeaderBox = styled.View`
  padding: 
    ${metrics.widthPercentageToDP(30)}px
    ${metrics.widthPercentageToDP(20)}px 
    ${metrics.widthPercentageToDP(0)}px
    ${metrics.widthPercentageToDP(20)}px;
  ${Platform.OS === 'Android' &&
  css`
      padding-top: ${metrics.widthPercentageToDP(20)}px;
    `}
  width: ${metrics.widthPercentageToDP(360)}px;
  height: ${metrics.widthPercentageToDP(70)}px;
  ${dark &&
  css`
      background: ${colors.black};
    `}
  align-self: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
