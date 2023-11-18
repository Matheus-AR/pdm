import ContatoProvider from './contexts/ContatoContext';
import MainNavigation from './routes/MainNavigation';

const App = () => (
  <ContatoProvider>
    <MainNavigation />
  </ContatoProvider>
);

export default App;




			