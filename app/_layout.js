import { View, Pressable } from 'react-native';
import { Stack, Link } from 'expo-router';
import { Logo } from '../components/Logo';
import { InfoIcon } from '../components/Icons';

export default function Layout() {
  return (
    <View className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#c2c2c2',
          },
          headerTintColor: 'green',
          headerTitle: '',
          headerLeft: () => <Logo />,
          headerRight: () => (
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
          ),
        }}
      />
    </View>
  );
}
