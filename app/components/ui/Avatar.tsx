import { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AVATAR_COLOR } from "../../constants";

interface IAvatar {
  name?: string | null;
  size?: number;
}

export const Avatar: FC<IAvatar> = ({ name, size }) => {
  return (
    <View style={styles.avatar}>
      <Text style={styles.title}>{name?.slice(0, 1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 50,
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AVATAR_COLOR,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
});
