import PropTypes from 'prop-types';
import React from 'react';
import {TabsBox, MenuIconBox, TextIcon} from './styles';
import {MaterialCommunityIcons as Icon} from '../../styles/LoadFonts';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

function Tabs({navigation}) {
  const icons = [
    {
      name: 'home',
      text: 'home',
      color: colors.primary,
    },
    {
      name: 'book-open-variant',
      text: 'my books',
    },
    {
      name: 'cart',
      text: 'store',
      handler: () => alert(1),
    },
    {
      name: 'pencil',
      text: 'write',
      handler: () => alert(1),
    },
    {
      name: 'menu',
      text: 'settings',
      handler: () => alert(1),
    },
  ];
  return (
    <>
      <TabsBox>
        {icons.map(icon => (
          <MenuIconBox>
            <Icon
              name={icon.name}
              size={metrics.widthPercentageToDP(30)}
              color={icon.color ? icon.color : colors.gray3}
              onPress={icon.handler ? icon.handler : null}
            />
            <TextIcon>{icon.text}</TextIcon>
          </MenuIconBox>
        ))}
      </TabsBox>
    </>
  );
}

Tabs.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Tabs.defaultProps = {navigation: {}};

export default Tabs;
