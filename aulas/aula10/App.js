import { View, Button } from 'react-native';

import { doGet, doPost, doPut, doDelete } from './services/api';

const App = () => {
  const handleGet = async () => {
    await doGet('https://jsonplaceholder.typicode.com/posts/');
    console.log('processa resposta doGet')
  };

  const handlePost = () => {
    doPost('${BASE_URL}signUp?key=${API_KEY}', {
      email: 'matheus@gmail.com',
      password: 'M4th3usAR1819',
      returnSecureToken: true
    });
  };

  const handlePut = () => {
    doPut('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  };

  const handleDelete = () => {
    doDelete('https://jsonplaceholder.typicode.com/posts/1');
  };

  return (
    <View style={{ flex: 1, padding: 16, justifyContent: 'space-evenly', }}>
      <Button title="Get" onPress={() => {handleGet()}} />
      <Button title="Post" onPress={() => {handlePost()}} />
      <Button title="Put" onPress={() => {handlePut()}} />
      <Button title="Delte" onPress={() => {handleDelete()}} />
    </View>
  );
};

export default App;
