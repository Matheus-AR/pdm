import React from 'react';
import { View, StyleSheet } from 'react-native';

import Box from './components/Box';

const App = () => {
  return (
    <View style={[styles.container, styles.flexRow, styles.justifySpaceEvenly, styles.alignCenter]}>
      <Box color={'red'} size={100}></Box>
      <Box color={'green'} size={100}></Box>
      <Box color={'blue'} size={100}></Box>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  justifySpaceAround: {
    justifyContent: 'space-around',
  },
  justifySpaceEvenly: {
    justifyContent: 'space-evenly',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
});
export default App;
