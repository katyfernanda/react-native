/** @format */

import { FontAwesome } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { View } from 'react-native';

export const InfoIcon = ({ size, color, style }) => {
  return (
    <View>
      <FontAwesome name="info-circle" size={size} color={color} style={style} />
    </View>
  );
};
export const HomeIcon = ({ size, color, style }) => {
  return (
    <View>
      <FontAwesome name="home" size={size} color={color} style={style} />
    </View>
  );
};

export const InfoLetterIcon = ({ size, color, style }) => {
  return (
    <View>
      <FontAwesome6 name="info" size={size} color={color} style={style} />
    </View>
  );
};
