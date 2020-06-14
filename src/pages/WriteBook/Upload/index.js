import PropTypes from 'prop-types';
import React from 'react';
import {MaterialCommunityIcons as Icon} from '../../../styles/LoadFonts';
import {colors} from '../../../styles/Colors';
import {metrics} from '../../../styles/Metrics';
import Button from '../../../components/Button';
import {Container, UploadBox, TextInfo} from './styles';

function UploadBook({navigation}) {
  return (
    <Container>
      <UploadBox>
        <Icon
          name='upload'
          size={metrics.widthPercentageToDP(60)}
          color={colors.primary}
       />
      </UploadBox>
      <TextInfo>You can upload your own book, just insert a PDF</TextInfo>
      <Button text='NEXT'/>
    </Container>
  );
}
export default UploadBook;

UploadBook.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

UploadBook.defaultProps = {
  navigation: {},
};
