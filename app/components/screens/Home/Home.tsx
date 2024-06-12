import { View, Text, StyleSheet } from "react-native";
import { Header } from "./Header";
import { Stories } from "./Stories/Stories";
import { Accounts } from "./Accounts/Accounts";
import { ApplyButton } from "./ApplyButton/ApplyButton";

export const Home = () => {
  return (
    <View style={styles.home}>
      <Header />
      <Stories />
      <Accounts />
      <ApplyButton />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});
