import { metrics } from '../../styles/Metrics';
import { colors } from '../../styles/Colors';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const ProfileBox = styled.View.attrs({
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10,
})``;

export const ProfileButton = styled.TouchableOpacity`
  margin: 0px 10px 10px 0;
  border-radius: 100;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lighter};
  border: 1px solid ${colors.gray4};
  ${dark &&
  css`
      background: ${colors.gray1};
      border: 1px solid ${colors.gray1};
    `}
  width: ${metrics.widthPercentageToDP(100)}px;
  height: ${metrics.widthPercentageToDP(100)}px;
`;
