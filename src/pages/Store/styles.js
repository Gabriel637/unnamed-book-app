import styled from 'styled-components/native';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerBooksList = styled.FlatList`
  width: ${metrics.widthPercentageToDP(360)}px;
  padding: 5px;
`;

export const StoreItem = styled.View.attrs({
  shadowColor: colors.gray1,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  width: ${metrics.widthPercentageToDP(340)}px;
  height: ${metrics.widthPercentageToDP(172)}px;
  background: ${colors.white};
  border-radius: 7px;
  margin: 5px;
  padding: 5px 10px;
  flex-direction: row;
`;

export const InfoBook = styled.View`
  width: ${metrics.widthPercentageToDP(215)}px;
  height: ${metrics.widthPercentageToDP(120)}px;
  align-items: flex-start;
`;

export const BookTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  color: ${colors.gray1};
`;

export const BookAuthor = styled.Text`
  font-size: 14px;
  color: ${colors.primary};
  text-align: center;
`;

export const BookSection = styled.Text`
  font-size: 14px;
  color: ${colors.blue};
  text-transform: capitalize;
  text-align: center;
`;

export const BookDescription = styled.Text`
  font-size: 16px;
  color: ${colors.gray1};
  text-align: justify;
`;