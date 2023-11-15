import { useContext } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { Appbar, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

import { ContatoContext } from '../contexts/ContatoContext';

const Editar = ({ route, navigation }) => {
  const { contatoId } = route.params;
  const { buscar, atualizar } = useContext(ContatoContext);
  const contato = buscar(contatoId);
  const { control, handleSubmit, formState: {errors} } = useForm({defaultValues: {
    nome: contato.nome, telefone: contato.telefone
  }});
  const onSubmit = (data) => {
    const { nome, telefone } = data;
    atualizar(contatoId, nome, telefone);
    navigation.pop();
  };

  return (
    <View style={{ flex: 1, paddingTop: 24 }}>
      <Appbar.Header>
        <Appbar.Content title='Atualizar Contato'/>
      </Appbar.Header>

      <Controller
        name='nome'
        control={control}
        rules={{
          required: {value: true, message: 'Nome é obrigatório'}
        }}
        render={({ field: { value, onChange }}) => (
          <TextInput
            style={{ marginHorizontal: 12}}
            label='Nome'
            mode='outlined'
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type='error' visible={true}>
        {errors.nome && errors.nome.message}
      </HelperText>

      <Controller
        name='telefone'
        control={control}
        rules={{
          required: {value: true, message: 'Telefone é obrgatório'}
        }}
        render={({ field: { value, onChange }}) => (
          <TextInput
            style={{ marginHorizontal: 12}}
            label='Telefone'
            mode='outlined'
            keyboardType='phone-pad'
            value={value}
            onChangeText={onChange}
          />
        )}
      />
      <HelperText type='error' visible={true}>
        {errors.telefone && errors.telefone.message}
      </HelperText>

      <Button mode='contained' onPress={handleSubmit(onSubmit)}>Salvar</Button>
    </View>
  )
}

export default Editar;