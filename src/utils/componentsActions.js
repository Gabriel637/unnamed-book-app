export const scrollHandler = event => {
  if (event.nativeEvent.contentOffset.y <= 0) {
    return false;
  }
  return true;
};
