import React from 'react';
import Colors from '../utility/colorConstant';
import icons from '../utility/icons';
import Styles from './Styles';
import SwipeButton from 'rn-swipe-button';

interface Props {
  title: string;
  thumbIcon: any;
  handleOnSwipeSuccess: Function;
  props: any;
}
const SwipableButton: React.FC<Props> = ({
  title,
  thumbIcon,
  handleOnSwipeSuccess,
  ...props
}) => {
  return (
    <SwipeButton
      containerStyles={Styles.swipableButtonContainer}
      disabled={false}
      swipeSuccessThreshold={80}
      height={50}
      width={325}
      title={title}
      titleColor={Colors.SWIPE_BTN_TITLE}
      titleFontSize={18}
      thumbIconStyles={Styles.thumbIconStyle}
      railStyles={Styles.railStyle}
      thumbIconImageSource={thumbIcon}
      shouldResetAfterSuccess={true}
      railFillBackgroundColor={Colors.SWIPE_BTN_BACKGROUND}
      railFillBorderColor={Colors.SWIPE_BTN_BORDER}
      thumbIconBackgroundColor={Colors.SWIPE_BTN_BACKGROUND}
      thumbIconBorderColor={Colors.THUMB_BORDER}
      railBackgroundColor={Colors.BLACK}
      onSwipeSuccess={() => handleOnSwipeSuccess()}
      {...props}
    />
  );
};

SwipableButton.defaultProps = {
  title: '',
  thumbIcon: icons.DIAMOND,
};

export default SwipableButton;
