import { NavigationContainer } from '@react-navigation/native';

import MainNavigation from './routes/MainNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation></MainNavigation>
    </NavigationContainer>
  )
}

export default App;