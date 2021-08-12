import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const Header = () => {
  return (
    <Container>
      <Image source={require('../../assets/images/twitter-logo-filled.png')} />
    </Container>
  );
};

export default Header;
