import { useContext } from 'react';
import { View, Text, Button } from 'react-native';

import { AuthContext } from '../contexts/AuthContext';

const Home = ({ navigation }) => {
  const { usuario, logout } = useContext(AuthContext);
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text>Olá {usuario.email}</Text>
      <Button title="Sair" onPress={() => {
        logout();
      }} />
    </View>
  );
};

export default Home;
