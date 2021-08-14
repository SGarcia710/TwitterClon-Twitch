import React, { useContext, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import LargeButton from '../components/LargeButton';
import Link from '../components/Link';
import Input from '../components/Input';
import { AuthContext } from '../../../context/providers/AuthProvider';
import { useEffect } from 'react';

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

const Error = styled.Text`
  color: red;
  font-size: 14px;
  text-align: center;
  margin-top: 20px;
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
  const authState = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createUser = () => {
    authState.signUp(email, password);
  };

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

        <Input
          value={email}
          onChangeText={setEmail}
          marginBottom={16}
          placeholder="Email"
        />
        <Input
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          marginBottom={16}
          secureTextEntry
        />

        {!!authState.error && <Error>{authState.error}</Error>}
      </View>

      <LargeButton
        backgroundColor="#4C9EEB"
        fontColor="white"
        fontSize={18}
        onPress={createUser}
        text="Crear cuenta"
        marginBottom={20}
      />
    </Container>
  );
};

export default Signup;
