import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useStories } from "./useStories";
import { Loader } from "../../../ui/Loader";
import { StoryItem } from "./StoryItem";

export const Stories = () => {
  const { stories, isLoading } = useStories();
  return (
    <View style={styles.stories}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <StoryItem story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  stories: {
    margin: 10,
  },
});
