import { ResizeMode, Video } from "expo-av";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "https://stream.mux.com/6nzoY44d6bc4pFhnWRlV900JNUszh00UgdikHcLwkvPJQ.m3u8",
        }}
        useNativeControls
        shouldPlay
        style={{ flexGrow: 1, backgroundColor: "red" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
