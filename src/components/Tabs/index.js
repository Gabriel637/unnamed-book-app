import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {TabsBox, MenuIconBox, TextIcon} from './styles';
import {MaterialCommunityIcons as Icon} from '../../styles/LoadFonts';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';

function Tabs() {
  const [tab, setTab] = useState(0);
  const items = [
    {
      name: 'home',
      text: 'home',
      handler: () => {
        setTab(0);
      },
      active: tab == 0 ? true : false,
    },
    {
      name: 'book-open-variant',
      text: 'my books',
      handler: () => {
        setTab(1);
      },
      active: tab == 1 ? true : false,
    },
    {
      name: 'cart',
      text: 'store',
      handler: () => {
        setTab(2);
      },
      active: tab == 2 ? true : false,
    },
    {
      name: 'pencil',
      text: 'write',
      handler: () => {
        setTab(3);
      },
      active: tab == 3 ? true : false,
    },
    {
      name: 'menu',
      text: 'settings',
      handler: () => {
        setTab(4);
      },
      active: tab == 4 ? true : false,
    },
  ];
  return (
    <>
      <TabsBox>
        {items.map(item => (
          <MenuIconBox onPress={item.handler}>
            <Icon
              name={item.name}
              size={metrics.widthPercentageToDP(30)}
              color={item.active ? colors.primary : colors.gray3}
              active={item.active}
            />
            <TextIcon>{item.text}</TextIcon>
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
