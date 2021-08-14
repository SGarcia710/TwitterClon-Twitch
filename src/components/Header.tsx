import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
  position: relative;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 42px;
`;

const LeftButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

const RightButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;

type HeaderProps = {
  hasBackButton?: boolean;
  customBackButton?: React.ReactNode;
  handleOnPressLeftButton?: () => void;
  hasBorderBottom?: boolean;
  customRightButton?: React.ReactNode;
  handleOnPressRightButton?: () => void;
};

const Header = ({
  hasBackButton,
  customBackButton,
  handleOnPressLeftButton,
  hasBorderBottom,
  customRightButton,
  handleOnPressRightButton,
}: HeaderProps) => {
  const backButton = !!customBackButton ? (
    customBackButton
  ) : hasBackButton ? (
    <Entypo name="chevron-thin-left" size={24} color="#4c9eeb" />
  ) : null;

  return (
    <Container
      style={
        hasBorderBottom
          ? {
              borderBottomWidth: 1,
              borderBottomColor: '#CED5DC',
            }
          : {}
      }
    >
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

      {!!customRightButton && (
        <RightButton
          onPress={
            !!handleOnPressRightButton ? handleOnPressRightButton : () => {}
          }
        >
          {customRightButton}
        </RightButton>
      )}
    </Container>
  );
};

export default Header;
