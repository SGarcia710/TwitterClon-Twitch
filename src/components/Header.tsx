import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
  position: relative;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const LeftButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

type HeaderProps = {
  hasBackButton?: boolean;
  customBackButton?: React.ReactNode;
  handleOnPressLeftButton?: () => void;
};

const Header = ({
  hasBackButton,
  customBackButton,
  handleOnPressLeftButton,
}: HeaderProps) => {
  const backButton = !!customBackButton ? (
    customBackButton
  ) : hasBackButton ? (
    <Entypo name="chevron-thin-left" size={24} color="#4c9eeb" />
  ) : null;
  return (
    <Container>
      {!!(hasBackButton || customBackButton) && (
        <LeftButton
          onPress={
            !!handleOnPressLeftButton ? handleOnPressLeftButton : () => {}
          }
        >
          {backButton}
        </LeftButton>
      )}
      <Image source={require('../../assets/images/twitter-logo-filled.png')} />
    </Container>
  );
};

export default Header;
