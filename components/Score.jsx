/** @format */
import { Text, View } from 'react-native';

export function Score({ score }) {
  const calculatorColorStyle = () => {
    return score > 50 ? 'bg-green-500' : 'bg-red-500';
  };
  const backgroundColorClass = calculatorColorStyle();

  return (
    <View
      className={`rounded-full ${backgroundColorClass} w-9 h-9 justify-center items-center`}
    >
      <Text
        className={`text-lg font-bold text-center ${backgroundColorClass} text-white`}
      >
        {score}
      </Text>
    </View>
  );
}
