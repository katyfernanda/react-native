import { Text, Pressable, View } from 'react-native';
import { ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { HomeIcon } from '../../components/Icons';
import { Screen } from '../../components/Screen';

export default function About() {
  return (
    <Screen>
      <ScrollView className="">
        <View className="items-end">
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
        </View>
        <Text className="text-black font-semibold text-2xl">
          Sobre el proyecto
        </Text>
        <Text className="text-black font-normal pt-3 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
          porttitor urna. Nulla purus massa, feugiat nec tellus non, ullamcorper
          finibus est. Donec ipsum felis, sagittis ut mauris in, finibus euismod
          metus. Mauris ultricies nec mauris et auctor. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia curae;
          Praesent euismod sapien quis magna finibus, sed consectetur tortor
          pharetra. Integer iaculis faucibus ante, a consequat ex. Donec eu
          aliquet erat. Aliquam fermentum sem quis ex mattis rutrum. Donec et
          commodo quam, luctus dignissim sem. Nulla gravida lacus at enim
          sodales,non molestie ipsum elementum. Interdum et malesuada fames ac
          ante ipsum primis in faucibus.
        </Text>
        <Text className="text-black font-normal pt-3 text-justify">
          Vestibulum vitae velit nibh. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Nunc posuere mauris
          mauris, ac pharetra mi scelerisque id. Nullam sit amet bibendum metus.
          Cras id purus velit. Fusce justo turpis, iaculis et velit molestie,
          blandit mollis est. Morbi tincidunt dapibus velit quis tincidunt.
          Quisque nec pretium velit. Vivamus eros ipsum, egestas vel massa
          vitae, mattis congue ante. Proin ut nulla tincidunt eros vehicula
          molestie. Vestibulum tincidunt arcu sit amet euismod fringilla.Ut
          volutpat eros sit amet quam blandit commodo.
        </Text>
      </ScrollView>
    </Screen>
  );
}
