import PropTypes from 'prop-types';
import React, {useState, useEffect} from 'react';
import {Platform} from 'react-native';
import {scrollHandler} from '../../utils/componentsActions';
import {Animated} from 'react-native';
import {
  Container,
  ReviewTitle,
  ContainerReviewsList,
  ReviewItem,
  UserName,
  ReviewDescription,
  ReviewTitleBox,
} from './styles';

function Reviews({navigation}) {
  const [line, setLine] = useState(false);
  const [visibilityAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(visibilityAnim, {
      toValue: line ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [line]);

  const reviews = [
    {
      id: 1,
      name: 'Jim Halpert',
      stars: 4,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ac nulla vitae',
    },
    {
      id: 2,
      name: 'Kevin Malone',
      stars: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet quam ac turpis maximus mollis eu id arcu. Orci varius natoque penatibus et magnis',
    },
  ];

  const reviewsEmpty = () => {
    return (
      <ContainerAdviceStyled>
        <TextAdviceStyled>Be the first to review this book</TextAdviceStyled>
      </ContainerAdviceStyled>
    );
  };

  const review = ({item}) => {
    return (
      <ReviewItem>
        <UserName numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </UserName>
        <ReviewDescription numberOfLines={6} ellipsizeMode="tail">
          {item.description}
        </ReviewDescription>
      </ReviewItem>
    );
  };

  return (
    <Container enabled={Platform.OS === 'ios'} behavior="padding">
      <ReviewTitleBox
        line={line}
        style={{
          opacity: visibilityAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1],
          }),
        }}>
        <ReviewTitle> Harry Potter's reviews</ReviewTitle>
      </ReviewTitleBox>
      <ContainerReviewsList
        onScrollBeginDrag={() => setLine(true)}
        onScroll={e => setLine(scrollHandler(e))}
        showsVerticalScrollIndicator={false}
        data={reviews}
        keyExtractor={item => item.id}
        ListEmptyComponent={reviewsEmpty}
        renderItem={review}
      />
    </Container>
  );
}

export default Reviews;

Reviews.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
    setParams: PropTypes.func,
  }),
};

Reviews.defaultProps = {
  navigation: {},
};
