/** @format */

import { View, Image, Text, StyleSheet, Pressable } from 'react-native';
import { Score } from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <>
      <Link href={`/${game.slug}`} asChild>
        <StyledPressable className="border border-white active:border-gray/100 active:bg-gray-200">
          <View
            key={game.slug}
            style={styles.card}
            className="flex-row items-center p-3"
          >
            <Image
              source={{ uri: game.image }}
              style={styles.image}
              className="w-24 h-36 rounded-md mr-4"
            />
            <View className="items-center" style={styles.containerText}>
              <Score score={game.score} />
              <Text
                style={styles.title}
                className="text-lg font-semibold mt-1 mb-1 text-black"
              >
                {game.title}
              </Text>
              <Text
                style={styles.description}
                className="text-justify text-black"
              >
                {game.description.slice(0, 90)}...
              </Text>
            </View>
          </View>
        </StyledPressable>
      </Link>
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: '99%',
    paddingTop: 20,
    paddingBottom: 20,
  },
  image: {
    width: 100,
    height: 140,
  },
  containerText: {
    width: '68%',
  },
  title: {
    fontSize: 22,
    paddingTop: 5,
    paddingBottom: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  description: {
    textAlign: 'justify',
  },
});
