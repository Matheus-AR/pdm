
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Novo from '../screens/Novo';
import Editar from '../screens/Editar';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Novo" component={Novo} />
        <Stack.Screen name="Editar" component={Editar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
