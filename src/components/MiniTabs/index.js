import PropTypes from 'prop-types';
import React from 'react';
import {TabsBox, TextBox, TextIcon} from './styles';

function MiniTabs({items}) {
  return (
    <>
      <TabsBox>
        {items.map(item => (
          <TextBox active={item.active} onPress={item.handler}>
            <TextIcon active={item.active}>{item.name}</TextIcon>
          </TextBox>
        ))}
      </TabsBox>
    </>
  );
}

MiniTabs.propTypes = {
  items: PropTypes.array.required,
};

MiniTabs.defaultProps = {};

export default MiniTabs;
