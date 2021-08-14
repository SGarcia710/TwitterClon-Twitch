import useSWR from 'swr';
import axios from 'axios';
import * as React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AuthContext } from '../../../context/providers/AuthProvider';
import Header from '../../../components/Header';
import styled from 'styled-components/native';
import Tweet from '../../../components/Tweet';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Container = styled.View<{ paddingTop: number }>`
  flex: 1;
  padding-top: ${(props) => props.paddingTop}px;
  position: relative;
`;

const HeaderAvatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: ${32 / 2}px;
`;

const NewTweetButton = styled.TouchableOpacity`
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: ${56 / 2}px;
  background-color: #4c9eeb;
  justify-content: center;
  align-items: center;
  bottom: 11px;
  right: 11.58px;
`;

type TimelineScreenRouteProp = RouteProp<HomeStackParamList, 'Timeline'>;

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Timeline'
>;

type Props = {
  route: TimelineScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const Timeline = ({ navigation }: Props) => {
  const { signOut, user } = React.useContext(AuthContext);
  const { top } = useSafeAreaInsets();

  const { data, error } = useSWR<{
    results: {
      name: string;
      image: string;
    }[];
  }>('https://rickandmortyapi.com/api/character', fetcher);

  return (
    <Container paddingTop={top}>
      <Header
        hasBorderBottom
        customBackButton={
          <HeaderAvatar
            source={{ uri: 'https://sebastiangarcia.dev/images/avatar.jpg' }}
          />
        }
        customRightButton={
          <Image
            source={require('../../../../assets/icons/star-outline.png')}
          />
        }
      />
      {!!data && (
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          {React.Children.toArray(
            data.results.map((char) => (
              <Tweet userImage={char.image} userName={char.name} />
            ))
          )}
        </ScrollView>
      )}
      <NewTweetButton
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 4,

          elevation: 7,
        }}
        onPress={() => navigation.navigate('Create Post')}
      >
        <Image
          source={require('../../../../assets/icons/new-tweet-filled.png')}
        />
      </NewTweetButton>
      {!!error && <Text>{error}</Text>}
    </Container>
  );
};

export default Timeline;
