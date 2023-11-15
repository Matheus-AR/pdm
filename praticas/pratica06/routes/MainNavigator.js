import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';
import Novo from '../screens/Novo';

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Novo' component={Novo} />
    </Stack.Navigator>
  )
}

export default MainNavigator;