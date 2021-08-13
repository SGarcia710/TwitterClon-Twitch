import React from 'react';
import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  border-radius: 50px;
  height: 50px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.Text`
  font-weight: bold;
  margin-left: 16px;
`;

type LargeButtonProps = {
  backgroundColor: string;
  fontColor: string;
  fontSize: number;
  text: string;
  icon?: React.ReactNode;
  onPress: () => void;
  marginBottom?: number;
};

const LargeButton = ({
  backgroundColor,
  fontColor,
  fontSize,
  text,
  icon,
  onPress,
  marginBottom,
}: LargeButtonProps) => {
  return (
    <Button
      style={{
        backgroundColor,
        marginBottom: marginBottom ? marginBottom : 0,
      }}
      onPress={onPress}
    >
      {icon}
      <ButtonText
        style={{
          color: fontColor,
          fontSize,
        }}
      >
        {text}
      </ButtonText>
    </Button>
  );
};

export default LargeButton;
