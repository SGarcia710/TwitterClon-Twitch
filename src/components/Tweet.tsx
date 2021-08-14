import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { EvilIcons, AntDesign, Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  flex-direction: row;
  padding: 10px 20px;
`;
const UserImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: ${55 / 2}px;
  margin-right: 8px;
`;
const Body = styled.View`
  flex: 1;
`;
const BodyHead = styled.View`
  flex-direction: row;
  margin-bottom: 2px;
  justify-content: space-between;
  align-items: center;
`;

const BodyHeadText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.3px;
`;

const UserName = styled(BodyHeadText)`
  margin-right: 4px;
  font-weight: 700;
  color: #141619;
`;
const UserHandle = styled(BodyHeadText)`
  margin-right: 4px;
  color: #687684;
`;
const Age = styled.Text`
  color: #687684;
`;
const Content = styled(BodyHeadText)`
  margin-bottom: 9px;

  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.3px;
  color: #141619;
`;
const TweetActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const ActionCount = styled.Text`
  margin-left: 3.5px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.3px;
  color: #687684;
`;

interface TweetProps {
  userImage: string;
  userName: string;
}

const Tweet = (props: TweetProps) => {
  return (
    <Container
      style={{
        borderBottomWidth: 1,
        borderBottomColor: '#CED5DC',
      }}
    >
      <TouchableOpacity>
        <UserImage source={{ uri: props.userImage }} />
      </TouchableOpacity>

      <Body>
        <BodyHead>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity>
              <UserName>{props.userName}</UserName>
            </TouchableOpacity>
            <UserHandle>@sebg96</UserHandle>
            <Age>· 10h</Age>
          </View>
          <TouchableOpacity>
            <EvilIcons name="chevron-down" size={24} color="#687684" />
          </TouchableOpacity>
        </BodyHead>
        <Content numberOfLines={10}>
          Name a show where the lead character is the worst character on the
          show I’ll get Sabrina Spellman
        </Content>
        <TweetActions>
          <Action>
            <EvilIcons name="comment" size={20} color="#687684" />
            <ActionCount>46</ActionCount>
          </Action>
          <Action>
            <EvilIcons name="retweet" size={22} color="#687684" />
            <ActionCount>5</ActionCount>
          </Action>
          <Action>
            <AntDesign name="hearto" size={15} color="#687684" />
            <ActionCount>21</ActionCount>
          </Action>
          <Action>
            <Ionicons name="ios-share-outline" size={17} color="#687684" />
          </Action>
        </TweetActions>
      </Body>
    </Container>
  );
};

export default Tweet;
