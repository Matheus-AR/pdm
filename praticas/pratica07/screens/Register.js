import { View } from 'react-native';
import { Text, TextInput, HelperText, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const rulesNome = {
    required: { value: true, message: 'O nome é obrigatório' },
    minLength: { value: 3, message: 'Número de caracteres min é 3' },
  };

  const rulesEmail = {
    required: { value: true, message: 'O email é obrigatório' },
    pattern: {
      value: /^\S+@\S+$/i,
      message: 'Email inválido',
    },
  };

  const rulesSenha = {
    required: { value: true, message: 'A senha é obrigatória' },
    minLength: {
      value: 6,
      message: 'A senha deve ter pelo menos 6 caracteres',
    },
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text style={{ fontSize: 32, textAlign: 'center' }}>Registrar</Text>

      <Controller
        name="nome"
        control={control}
        rules={rulesNome}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Nome"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={errors.nome}
          />
        )}
      />
      <HelperText type="error" visible={true}>
        {errors.nome && errors.nome.message}
      </HelperText>

      <Controller
        name="email"
        control={control}
        rules={rulesEmail}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Email"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            keyboardType="email-address"
            error={errors.email}
          />
        )}
      />

      <HelperText type="error" visible={true}>
        {errors.email && errors.email.message}
      </HelperText>

      <Controller
        name="senha"
        control={control}
        rules={rulesSenha}
        render={({ field: { value, onChange } }) => (
          <TextInput
            label="Senha"
            mode="outlined"
            value={value}
            onChangeText={onChange}
            secureTextEntry={true}
            error={errors.senha}
          />
        )}
      />
      <HelperText type="error" visible={true}>
        {errors.senha && errors.senha.message}
      </HelperText>

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Registrar
      </Button>
    </View>
  );
};

export default Register;
