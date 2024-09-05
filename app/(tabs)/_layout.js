import { Tabs } from 'expo-router';
import { View } from 'react-native';
import { HomeIcon, InfoLetterIcon } from '../../components/Icons';

export default function TabsLayput() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#c2c2c2' },
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: '#fc791e',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => <InfoLetterIcon size={20} color={color} />,
        }}
      />
    </Tabs>
  );
}
