import { View, Text } from "react-native";
import { myStyle } from "../styles/myStyle";

export default function Person({ name, age }) {
  //   console.log(props);
  return (
    <View style={myStyle.content}>
      <Text style={myStyle.header}>
        name {name} , age {age} year.
      </Text>
    </View>
  );
}
