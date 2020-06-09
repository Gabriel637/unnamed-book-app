import {metrics} from '../../styles/Metrics';
import {colors} from '../../styles/Colors';
import {darkMode} from '../../utils/settingsApp';
import styled, {css} from 'styled-components/native';

const dark = darkMode();

export const Container = styled.ScrollView`
  ${({hide}) =>
    hide &&
    css`
      display: none;
    `}
  padding: 0px 0px 10px;
  background-color: ${colors.white};
  ${dark &&
    css`
      background: ${colors.black};
      border-bottom-width: 0.3px;
    `}
`;

export const SectionContainer = styled.ScrollView`
  padding: 5px 10px 10px;
  height: ${metrics.widthPercentageToDP(180)}px;
`;

export const Header = styled.View`
  margin: 10px;
  flex-direction: row;
  height: ${metrics.widthPercentageToDP(30)}px;
  padding-bottom: ${metrics.widthPercentageToDP(5)}px;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SubTextButton = styled.TouchableOpacity`
  flex-direction: row;
`;

export const SectionText = styled.Text`
  font-size: ${metrics.widthPercentageToDP(18)}px;
  text-transform: uppercase;
  color: ${colors.gray3};
`;

export const SubText = styled.Text`
  font-size: ${metrics.widthPercentageToDP(11)}px;
  color: ${colors.link_blue};
`;

export const TextStyled = styled.Text`
  font-size: 30;
  text-align: center;
  padding: 0px 30px;
`;
