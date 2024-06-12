import { FC } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { IStories } from "./useStories";
import { useData } from "../../../../hooks/useData";

export const StoryItem: FC<{ story: IStories }> = ({ story }) => {
  const { setActiveStories } = useData();
  return (
    <Pressable onPress={() => setActiveStories(story.images)}>
      <View style={styles.story}>
        <ImageBackground
          source={{ uri: story.images[0] }}
          resizeMode="cover"
          style={styles.img}
          imageStyle={styles.innerImage}
        >
          <Text style={styles.text}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 4,
    borderColor: "blue",
    padding: 2,
    borderWidth: 1,
  },
  img: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
  },
  innerImage: {
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
    margin: 8,
  },
});
