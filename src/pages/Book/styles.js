import styled from 'styled-components/native';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const BookItem = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: 10px 20px;
  flex-direction: row;
`;

export const InfoBook = styled.View`
  width: ${metrics.widthPercentageToDP(215)}px;
  height: ${metrics.widthPercentageToDP(120)}px;
  align-items: flex-start;
`;

export const BookTitle = styled.Text`
  font-size: 26px;
  text-align: center;
  color: ${colors.gray1};
`;

export const BookAuthor = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  text-align: center;
`;

export const BookSection = styled.Text`
  font-size: 18px;
  color: ${colors.blue};
  text-transform: capitalize;
  text-align: center;
`;

export const BookDescription = styled.Text`
  font-size: 16px;
  color: ${colors.gray1};
  text-align: justify;
`;
