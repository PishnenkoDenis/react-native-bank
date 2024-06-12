import { StyleSheet, View } from "react-native";

export const Padding = ({ children }: any) => {
  return <View style={styles.padding}>{children}</View>;
};

const styles = StyleSheet.create({
  padding: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
