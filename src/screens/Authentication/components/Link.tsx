import React from 'react';
import styled from 'styled-components/native';

const Container = styled.TouchableWithoutFeedback``;
const Content = styled.Text`
  color: #4c9eeb;
`;

const Link = ({
  content,
  onPress,
}: {
  content: string;
  onPress?: () => void;
}) => {
  return (
    <Container onPress={onPress}>
      <Content>{content}</Content>
    </Container>
  );
};

export default Link;
