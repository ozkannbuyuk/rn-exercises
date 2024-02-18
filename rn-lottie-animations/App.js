import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef, useState } from "react";

import LottieView from "lottie-react-native";

export default function App() {
  const treeRef = useRef(null);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    treeRef?.current?.play(0, 30);
  }, []);

  const handleLike = () => {
    if (liked) {
      treeRef?.current?.reset();
    } else {
      treeRef?.current?.play(30, 144);
    }

    setLiked(!liked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <LottieView
          style={{ flex: 1 }}
          source={require("./assets/2024.json")}
          autoPlay
          loop
        />
      </View>

      <View style={styles.row}>
        <Pressable style={styles.icon} onPress={handleLike}>
          <LottieView
            ref={treeRef}
            loop={false}
            source={require("./assets/tree.json")}
          />
        </Pressable>
      </View>

      <Text style={styles.text}>Lottie Animations</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: 100,
  },
  welcome: {
    height: 300,
    aspectRatio: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 200,
    aspectRatio: 1,
  },
  text: {
    fontSize: 30,
    marginTop: 20,
  },
});
