import React from 'react';
import { View } from 'react-native';

const Box = (props) => {

  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
  };
  return (
    <View style={boxStyle}></View>
  )
};

export default Box;