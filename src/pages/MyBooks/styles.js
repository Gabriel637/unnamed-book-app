import styled from 'styled-components/native';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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
