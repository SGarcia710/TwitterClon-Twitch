import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LargeButton from '../components/LargeButton';
import Link from '../components/Link';
import Input from '../components/Input';

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

type SignupScreenRouteProp = RouteProp<BaseStackParamList, 'Signup'>;

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  BaseStackParamList,
  'Signup'
>;

type Props = {
  route: SignupScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Signup = ({ navigation, route }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Container
      style={{
        paddingTop: insets.top,
      }}
    >
      <Header
        hasBackButton
        handleOnPressLeftButton={() => navigation.goBack()}
      />
      <View
        style={{
          flex: 1,
        }}
      >
        <HeadingText>Crear tu cuenta</HeadingText>

        <Input marginBottom={16} placeholder="Nombre" />
        <Input
          placeholder="Numero de teléfono o dirección de correo"
          marginBottom={16}
        />
        <Input placeholder="Fecha de nacimiento" />
      </View>

      <LargeButton
        backgroundColor="#4C9EEB"
        fontColor="white"
        fontSize={18}
        onPress={() => console.log('Crear cuenta con email')}
        text="Crear cuenta"
        marginBottom={20}
      />
    </Container>
  );
};

export default Signup;
