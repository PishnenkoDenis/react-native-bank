import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Padding } from "./Padding";

interface ISubTitle {
  title: string;
}

export const SubTitle: FC<ISubTitle> = ({ title }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },
  wrapper: {
    marginLeft: 10,
  },
});
