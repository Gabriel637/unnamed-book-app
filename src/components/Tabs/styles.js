import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import styled from 'styled-components/native';

export const TabsBox = styled.View`
  padding: ${metrics.widthPercentageToDP(5)}px 0;
  height: ${metrics.widthPercentageToDP(55)}px;
  flex-direction: row;
  justify-content: space-around;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 0.5px;
`;

export const MenuIconBox = styled.TouchableOpacity`
  height: ${metrics.widthPercentageToDP(50)}px;
  width: ${metrics.widthPercentageToDP(65)}px;
  align-items: center;
  justify-content: center;
`;

export const TextIcon = styled.Text`
  color: ${colors.gray1};
  text-transform: uppercase;
  display: none;
`;
