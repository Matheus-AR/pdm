import ContatoProvider from './contexts/ContatoContext';
import MainNavigator from './routes/MainNavigator';

const App = () => {
  return (
    <ContatoProvider>
      <MainNavigator />
    </ContatoProvider>
  );
};

export default App;