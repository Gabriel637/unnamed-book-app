import {colors} from '../../styles/Colors';
import {darkMode} from '../../utils/settingsApp';
import styled, {css} from 'styled-components/native';

const dark = darkMode();

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${colors.lighter2};
  ${dark &&
    css`
      background: ${colors.black};
    `}
`;
