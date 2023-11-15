import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useContext } from 'react'
import Home from '../screens/Home';
import Login from '../screens/Login';

import { AuthContext } from '../contexts/AuthContext';

const Stack = createNativeStackNavigator();

const Main = () => {
  const { usuario } = useContext(AuthContext);
  return (
    <Stack.Navigator>
      {usuario.logado ? (
        <Stack.Screen name="Home" component={Home} />
      ) : (
        <Stack.Screen name="Login" component={Login} /> 
      )}
    </Stack.Navigator>
  );
};

export default Main;