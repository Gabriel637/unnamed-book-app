import {metrics} from '../../styles/Metrics';
import {colors} from '../../styles/Colors';
import styled from 'styled-components/native';

export const BooksBox = styled.View.attrs({
  shadowColor: colors.gray1,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
})`
  margin: 0px 10px 10px 0;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lighter};
  width: ${metrics.widthPercentageToDP(100)}px;
  height: ${metrics.widthPercentageToDP(160)}px;
  border: 1px solid ${colors.gray4};
`;

export const Title = styled.Text`
  font-size: ${metrics.widthPercentageToDP(20)}px;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.gray2};
`;

export const SubTitle = styled.Text`
  font-size: ${metrics.widthPercentageToDP(10)}px;
  text-transform: uppercase;
  text-align: center;
  color: ${colors.gray2};
`;
