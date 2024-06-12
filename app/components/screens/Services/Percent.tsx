import { FC } from "react";
import { StyleSheet, View, Text } from "react-native";

export const Percent: FC<{ percent: number }> = ({ percent }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{percent + "%"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderStyle: "solid",
    borderRightWidth: 27,
    borderTopWidth: 27,
    borderRightColor: "transparent",
    borderTopColor: "#AAEF00",
    transform: [{ rotate: "90deg" }],
  },
  text: {
    width: 10,
    height: 10,
    position: "absolute",
    fontSize: 8,
    transform: [{ rotate: "-40deg" }],
    top: -27,
    left: 8,
  },
});
