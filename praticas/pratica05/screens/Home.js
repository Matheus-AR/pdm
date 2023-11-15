import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button
        title="Perfil"
        onPress={() => {
          navigation.navigate('Perfil');
        }}></Button>
    </View>
  );
};

export default Home;
