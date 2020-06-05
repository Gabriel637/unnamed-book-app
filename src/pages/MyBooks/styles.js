import styled from 'styled-components/native';
import {colors} from '../../styles/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BoxCollection = styled.View`
  margin: 20px;
  padding: 10px;
  color: ${colors.black};
  font-size: 18;
  background-color: ${colors.white};
  width: 100%;
  text-align: center;
`;

export const TextStyled = styled.Text`
  font-size: 30;
  text-align: center;
  padding: 0px 30px;
`;
