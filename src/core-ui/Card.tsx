import * as React from 'react';

import {View} from 'react-native';

type Props = {
  size: 'SMALL' | 'MEDIUM';
  style?: Object;
  children: React.ReactNode;
};

export default function Card(props: Props) {
  let {children, size, style, ...otherProps} = props;
  let cardStyle = [defaultStyle, CARD_SIZE[size], style];

  return (
    <View {...otherProps} style={cardStyle}>
      {children}
    </View>
  );
}

const defaultStyle = {
  borderRadius: 15,
  shadowOpacity: 0.7,
  shadowRadius: 8,
  backgroundColor: '#FFF',
};

const CARD_SIZE = {
  SMALL: {
    width: 340,
    height: 160,
  },
  MEDIUM: {
    width: 370,
    height: 370,
  },
};
