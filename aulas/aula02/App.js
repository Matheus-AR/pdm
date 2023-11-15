import { View, StyleSheet } from 'react-native';
import Box from './components/Box';

// componente principal do app
const App = () => (
    <View style={styles.container}>
        <Box color={'red'} size={50}></Box>
        <Box color={'green'} size={50}></Box>
        <Box color={'blue'} size={50}></Box>
    </View>
);

// estilo objeto StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    flexDirection: 'column',
    justifyContent: "space-between",
    alignItems: 'center'
  },
});

export default App;
