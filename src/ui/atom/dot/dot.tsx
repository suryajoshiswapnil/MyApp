/**
 * @author Swapnil Suryajoshi<swapnil.suryajoshi@gmail.com>
 * @copyright 2019
 */

import React, { useEffect, FC } from 'react';
import { Animated } from 'react-native';

import { withStyle } from '../../../util';
import { colors } from '../../../constant';

interface Props {
  size?: number;
  color?: string;
  animating?: boolean;
  styles: any;
}

const Dot: FC<Props> = ({ styles, animating = true, ...props }) => {
  const opacity = new Animated.Value(1);
  const scale = new Animated.Value(0.3);

  const blinkAnimation = Animated.parallel([
    Animated.loop(
      Animated.timing(opacity, {
        duration: 1250,
        toValue: 0,
        useNativeDriver: true,
      }),
    ),
    Animated.loop(
      Animated.timing(scale, {
        duration: 1250,
        toValue: 1,
        useNativeDriver: true,
      }),
    ),
  ]);

  const animate = () => {
    // Reset values to animate
    opacity.setValue(1);
    scale.setValue(0.3);

    if (animating) {
      blinkAnimation.start();
    }
    return blinkAnimation.stop;
  };

  useEffect(animate, [animating]);

  const dotStyle = {
    width: props.size || 40,
    height: props.size || 40,
    borderRadius: (props.size || 40) / 2,
    backgroundColor: props.color || colors.surface,
  };

  return (
    <Animated.View>
      <Animated.View
        style={[
          styles.dot,
          dotStyle,
          { borderColor: colors.accent, borderWidth: 2 },
          { opacity, transform: [{ scale: scale }] },
        ]}
      />
      <Animated.View style={[dotStyle, styles.dot, styles.absolute]} />
    </Animated.View>
  );
};

export default withStyle({
  dot: {
    transform: [{ scale: 0.3 }],
  },
  absolute: {
    position: 'absolute',
  },
})(Dot);
