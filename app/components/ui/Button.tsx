import { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ORANGE } from "../../constants";

interface IButton {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

const defaultColors = ["#ebb37f", "#FBBF24"];

export const Button: FC<IButton> = ({
  onPress,
  title,
  colors = defaultColors,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 40,
    marginBottom: 4,
    marginTop: 4,
    borderRadius: 10,
    backgroundColor: ORANGE,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});
