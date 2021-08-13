import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import styled from 'styled-components/native';
import LargeButton from '../components/LargeButton';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Link from '../components/Link';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const { width } = Dimensions.get('screen');

const Container = styled.View`
  flex: 1;
  margin: 0px 20px;
  padding-bottom: 16px;
`;

const Heading = styled.View`
  flex: 1;
  justify-content: center;
`;
const HeadingText = styled.Text`
  font-size: 34px;
  font-weight: bold;
`;

const GoogleLogo = styled.Image`
  width: 24px;
  height: 24px;
`;

const SeparatorContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Separator = styled.View`
  height: 1px;
  width: ${(width - 80) / 2}px;
  background-color: black;
`;

const Terms = styled.Text`
  color: #696969;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const HandleLogin = styled.Text`
  color: #696969;
`;

type OnboardingScreenRouteProp = RouteProp<BaseStackParamList, 'Onboarding'>;

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  BaseStackParamList,
  'Onboarding'
>;

type Props = {
  route: OnboardingScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Onboarding = ({ navigation, route }: Props) => {
  const insets = useSafeAreaInsets();

  return (
    <Container
      style={{
        paddingTop: insets.top,
      }}
    >
      <Header />

      <Heading>
        <HeadingText>
          Entérate de lo que está pasando en el mundo en este momento
        </HeadingText>
      </Heading>

      <LargeButton
        backgroundColor="black"
        fontColor="white"
        fontSize={18}
        icon={
          <GoogleLogo
            source={require('../../../../assets/icons/google-color.png')}
          />
        }
        onPress={() => console.log('Loggeo con Google')}
        text="Continuar con Google"
        marginBottom={10}
      />
      <LargeButton
        backgroundColor="black"
        fontColor="white"
        fontSize={18}
        icon={<AntDesign name="apple1" size={24} color="white" />}
        onPress={() => console.log('Loggeo con Apple')}
        text="Continuar con Apple"
      />

      <SeparatorContainer>
        <Separator />
        <Entypo name="circle" size={16} color="black" />
        <Separator />
      </SeparatorContainer>

      <LargeButton
        backgroundColor="#4C9EEB"
        fontColor="white"
        fontSize={18}
        onPress={() => navigation.navigate('Signup')}
        text="Crear cuenta"
      />
      <Terms>
        Al registrarte, aceptas los <Link content="Términos" />, la{' '}
        <Link content="Política de privacidad" /> y la{' '}
        <Link content="Política de cookies" />.
      </Terms>

      <HandleLogin>
        ¿Ya tienes una cuenta?{' '}
        <Link
          onPress={() => navigation.navigate('Signin')}
          content="Inicia sesión"
        />
      </HandleLogin>
    </Container>
  );
};

export default Onboarding;
