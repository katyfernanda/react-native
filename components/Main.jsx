/** @format */

import { View, ActivityIndicator, FlatList, Pressable } from 'react-native';
import { getLatestGames } from '../lib/metacritic';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { GameCard } from './GameCard';
import { Logo } from './Logo';
import { Link } from 'expo-router';
import { InfoIcon } from './Icons';
import { Screen } from './Screen';

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();
  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);
  return (
    <Screen
    // style={{
    //   paddingTop: insets.top,
    //   paddingBottom: insets.bottom,
    //   paddingLeft: insets.left,
    //   paddingRight: insets.right,
    // }}
    >
      {/* <View className="flex-row justify-between ml-2 items-center">
        <View>
          <Logo />
        </View>
        <View className="items-center justify-center">
          <Link asChild href="/about">
            <Pressable>
              {({ pressed }) => (
                <InfoIcon
                  size={30}
                  color={pressed ? 'blue' : 'gray'}
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>
        </View>
      </View> */}
      {games.length === 0 ? (
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size={'large'} color={'gray'} />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(game) => game.slug}
          renderItem={({ item }) => <GameCard game={item} />}
        />
      )}
    </Screen>
  );
}
