import { StyleSheet, View } from "react-native";
import { useData } from "../../../../hooks/useData";
// @ts-ignore
import { StoryContainer as SC } from "react-native-stories-view";

export const StoryContainer = () => {
  const { activeStories, setActiveStories } = useData();

  return (
    activeStories && (
      <SC
        visible={true}
        enableProgress={true}
        images={activeStories}
        duration={20}
        onComplete={() => setActiveStories(null)}
        containerStyle={styles.sc}
      ></SC>
    )
  );
};

const styles = StyleSheet.create({
  sc: {
    width: "100%",
    height: "100%",
  },
});
