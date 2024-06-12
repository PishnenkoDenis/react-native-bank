import { FC } from "react";
import { StyleSheet, Text } from "react-native";
import { Padding } from "./Padding";

interface ITitle {
  title: string;
}

export const Title: FC<ITitle> = ({ title }) => {
  return (
    <Padding>
      <Text style={styles.title}>{title}</Text>
    </Padding>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
