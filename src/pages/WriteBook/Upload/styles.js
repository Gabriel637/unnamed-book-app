import {colors} from '../../../styles/Colors';
import {metrics} from '../../../styles/Metrics';
import {darkMode} from '../../../utils/settingsApp';
import styled, {css} from 'styled-components/native';

const dark = darkMode();

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: ${metrics.widthPercentageToDP(30)}px 0;
  background: ${colors.lighter2};
  ${dark &&
  css`
    background: ${colors.black};
  `}
`;

export const UploadBox = styled.View`
  align-items: center;
  justify-content: center;
  width: ${metrics.widthPercentageToDP(320)}px;
  height: ${metrics.widthPercentageToDP(120)}px;
  border: 1px dashed ${colors.primary};
`;

export const TextInfo = styled.Text`
  margin: ${metrics.widthPercentageToDP(30)}px
    ${metrics.widthPercentageToDP(30)}px;
  text-align: center;
  font-size: 20px;
  color: ${colors.gray3};
  ${dark &&
  css`
    color: ${colors.white};
  `}
`;
