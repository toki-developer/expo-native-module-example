import { Text, View } from "react-native";
import MyModule from "@/modules/my-module";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{MyModule.hello()}</Text>
    </View>
  );
}
