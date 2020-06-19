import { colors } from '../../styles/Colors';
import { metrics } from '../../styles/Metrics';
import { darkMode } from '../../utils/settingsApp';
import styled, { css } from 'styled-components/native';

const dark = darkMode();

export const Container = styled.View`
  flex: 1;
  padding-bottom: ${metrics.widthPercentageToDP(20)}px;
  justify-content: center;
  align-items: center;
  ${dark &&
  css`
      background: ${colors.black};
    `}
`;

export const ContainerBooksList = styled.FlatList`
  width: ${metrics.widthPercentageToDP(328)}px;
  padding: 5px;
`;

export const TextStyled = styled.Text`
  font-size: 30;
  text-align: center;
  padding: 0px 30px;
`;

export const ContainerAdvice = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${metrics.widthPercentageToDP(328)}px;
  height: ${metrics.widthPercentageToDP(420)}px;
`;

export const TextAdvice = styled.Text`
  font-size: ${metrics.widthPercentageToDP(18)}px;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.primary};
`;
