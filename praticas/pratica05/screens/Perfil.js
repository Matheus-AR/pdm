import { View, Text, Button } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Perfil</Text>
      <Button
        title="Home"
        onPress={() => {
          navigation.navigate('Home');
        }}></Button>
    </View>
  );
};

export default Perfil;
