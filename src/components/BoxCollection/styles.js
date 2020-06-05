import {metrics} from '../../styles/Metrics';
import {colors} from '../../styles/Colors';
import styled, {css} from 'styled-components/native';

export const Container = styled.ScrollView`
  ${({hide}) =>
    hide &&
    css`
      display: none;
    `}
`;

export const SectionContainer = styled.ScrollView`
  margin: 0px 0px 10px;
  padding: 5px 10px 10px;
  height: ${metrics.widthPercentageToDP(170)}px;
`;

export const Header = styled.View`
  margin: 10px;
  flex-direction: row;
  height: ${metrics.widthPercentageToDP(30)}px;
  padding-bottom: ${metrics.widthPercentageToDP(5)}px;
  border-bottom-color: ${colors.gray4};
  border-bottom-width: 1;
  justify-content: space-between;
`;

export const SectionText = styled.Text`
  font-size: ${metrics.widthPercentageToDP(22)}px;
  position: absolute;
  bottom: 3;
`;

export const SubText = styled.Text`
  font-size: ${metrics.widthPercentageToDP(10)}px;
  color: ${colors.blue};
  position: absolute;
  bottom: 3;
  right: 0;
`;

export const TextStyled = styled.Text`
  font-size: 30;
  text-align: center;
  padding: 0px 30px;
`;
