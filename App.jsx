import { View } from "react-native";
import { myStyle } from "./styles/myStyle";
import Person from "./components/person";

export default function App() {
  return (
    <View style={myStyle.container}>
      <View style={{ margin: 10 }}>
        <Person name={"alif"} age={23} />
        <Person name={"jonh"} age={34} />
        <Person name={"alice"} age={19} />
        <Person name={"bob"} age={20} />
        <Person name={"linda"} age={15} />
      </View>
    </View>
  );
}
