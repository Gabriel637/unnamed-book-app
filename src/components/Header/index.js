import React from 'react';
import {colors} from '../../styles/Colors';
import {metrics} from '../../styles/Metrics';
import {MaterialCommunityIcons as Icon} from '../../styles/LoadFonts';
import {HeaderBox, LogoTitle} from './styles';

function Header({}) {
  return (
    <>
      <HeaderBox>
        <LogoTitle>Liber</LogoTitle>
        <Icon
          name="magnify"
          size={metrics.widthPercentageToDP(30)}
          color={colors.gray3}
          onPress={null}
        />
      </HeaderBox>
    </>
  );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
