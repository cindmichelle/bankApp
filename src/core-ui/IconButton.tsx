import * as React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';

type Props = {
  name: string;
  size: 'SMALL' | 'MEDIUM';
  shape: 'SQUARE' | 'ROUNDED';
  style?: Object;
  text: string;
};

export default function IconButton(props: Props) {
  let {size, shape, style, name, text, ...otherProps} = props;
  let {borderStyle, titleStyle} = styles;
  let btnOuterStyle = [
    borderStyle,
    style,
    {
      width: BUTTON_SIZE[size],
      height: BUTTON_SIZE[size],
      borderRadius: BUTTON_SHAPE[shape],
    },
  ];

  return (
    <TouchableOpacity style={btnOuterStyle} {...otherProps}>
      <Ionicons name={name} size={35} color="#004080" />
      <Text style={titleStyle}>{text}</Text>
      <Icon name="rocket" size={30} color="#900" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  borderStyle: {
    borderWidth: 2,
    borderColor: '#cccccc',
    shadowRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  titleStyle: {textTransform: 'uppercase', fontSize: 12, letterSpacing: 1},
});
const BUTTON_SIZE = {
  SMALL: 100,
  MEDIUM: 200,
};

const BUTTON_SHAPE = {
  ROUNDED: 50,
  SQUARE: 35,
};
