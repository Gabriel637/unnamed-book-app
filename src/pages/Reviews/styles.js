import styled, {css} from 'styled-components/native';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerReviewsList = styled.FlatList`
  width: ${metrics.widthPercentageToDP(360)}px;
  padding: 5px;
`;

export const ReviewItem = styled.View.attrs({
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
`;

export const ReviewDescription = styled.Text`
  font-size: 16px;
  color: ${colors.gray1};
  text-align: justify;
`;

export const UserName = styled.Text`
  font-size: 22px;
  color: ${colors.primary};
  text-align: justify;
`;

export const ReviewTitleBox = styled.View`
  width: ${metrics.widthPercentageToDP(340)}px;
  ${({line}) =>
    line &&
    css`
      border-bottom-color: ${colors.primary};
      border-bottom-width: 1;
    `}
`;

export const ReviewTitle = styled.Text`
  font-size: 28px;
  color: ${colors.primary};
  text-align: center;
  margin: ${metrics.widthPercentageToDP(10)}px 0px;
`;
