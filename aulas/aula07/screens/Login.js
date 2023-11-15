import { useState, useContext } from 'react'
import {View, TextInput, Button} from 'react-native'

import { AuthContext } from '../contexts/AuthContext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  const { login } = useContext(AuthContext);

  return <View style={{flex: 1, justifyContent: 'center', padding: 16}}>
    <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 8, lineHeight: 32}}
    value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' keyboardType='email-address'/>
    <TextInput style={{borderBottomWidth: 1, borderBottomColor: 'gray', marginBottom: 8, lineHeight: 32}}
    value={senha} onChangeText={(text) => setSenha(text)} placeholder='Senha' secureTextEntry={true}/>
    <Button title="Entrar" onPress={() => {
      login(email, senha);
    }}/>
  </View>;
};

export default Login;