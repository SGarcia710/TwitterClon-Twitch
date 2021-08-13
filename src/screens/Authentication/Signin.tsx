import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../components/Header';
import styled from 'styled-components/native';
import { Dimensions, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LargeButton from './components/LargeButton';
import Link from './components/Link';
import Input from './components/Input';

const Container = styled.View`
  flex: 1;
  margin: 0px 20px;
  padding-bottom: 16px;
`;

const HeadingText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
`;

const ForgotPassword = styled.View`
  width: 100%;
  align-items: center;
`;

const CancelHeaderButton = styled.Text`
  color: #4c9eeb;
`;

type SigninScreenRouteProp = RouteProp<BaseStackParamList, 'Signin'>;

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  BaseStackParamList,
  'Signin'
>;

type Props = {
  route: SigninScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Signin = ({ navigation, route }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Container
      style={{
        paddingTop: insets.top,
      }}
    >
      <Header
        handleOnPressLeftButton={() => navigation.goBack()}
        customBackButton={<CancelHeaderButton>Cancelar</CancelHeaderButton>}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <HeadingText>
          Para empezar, intruduce tu teléfono, correo electrónico o
          @nombredeusuario
        </HeadingText>

        <Input
          marginBottom={16}
          placeholder="Teléfono, correo electrónico o
         nombre de usuario"
        />
        <Input placeholder="Contraseña" />
      </View>

      <LargeButton
        backgroundColor="#4C9EEB"
        fontColor="white"
        fontSize={18}
        onPress={() => console.log('Crear cuenta con email')}
        text="Iniciar sesion"
        marginBottom={20}
      />

      <ForgotPassword>
        <Link content="¿Olvidaste tu contraseña?" />
      </ForgotPassword>
    </Container>
  );
};

export default Signin;
