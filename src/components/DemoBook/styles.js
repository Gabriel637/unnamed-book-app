import {metrics} from '../../styles/Metrics';
import {colors} from '../../styles/Colors';
import styled from 'styled-components/native';

export const BooksBox = styled.View`
  margin: 0px 10px 10px 0;
  justify-content: center;
  align-items: center;
  background-color: ${colors.white};
  width: ${metrics.widthPercentageToDP(100)}px;
  height: ${metrics.widthPercentageToDP(160)}px;
  border: 1px solid ${colors.gray4};
`;

export const Title = styled.Text`
  font-size: ${metrics.widthPercentageToDP(20)}px;
  color: ${colors.gray2};
`;
