import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import { Link, Stack } from 'expo-router';
import { HomeIcon } from '../components/Icons';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import { useEffect, useState } from 'react';
import { getGameDetails } from '../lib/metacritic';
import { Score } from '../components/Score';

export default function Detail() {
  const { gameslug } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);
  useEffect(() => {
    if (gameslug) {
      getGameDetails(gameslug).then(setGameInfo);
    }
  }, [gameslug]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: gameslug,
          headerLeft: () => { },
          headerRight: () => (
            <Link asChild href="/">
              <Pressable>
                {({ pressed }) => (
                  <HomeIcon
                    size={30}
                    color={pressed ? 'green' : 'gray'}
                    style={{ opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      {gameInfo === null ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size={'large'} color={'gray'} />
        </View>
      ) : (
        <ScrollView>
          <View className="items-center justify-center pt-5">
            <Image
              source={{ uri: gameInfo.img }}
              style={{ width: 200, height: 290 }}
              className="w-24 h-36 rounded-md mb-2"
            />
            <Score score={gameInfo.score} />
            <Text className="text-xl font-bold mt-2">{gameInfo.title}</Text>
            <Text className="text-base text-gray-600 mt-2 text-justify">
              {gameInfo.description}
            </Text>
          </View>
        </ScrollView>
      )}
    </Screen>
  );
}
