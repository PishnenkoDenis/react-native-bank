import { StyleSheet, View } from "react-native";
import { IFooterItem } from "../../../../Layout/Footer/Footer";
import { FC } from "react";
import { AntDesign } from "@expo/vector-icons";
import { BLUE } from "../../../../../constants";

interface Icon extends Pick<IFooterItem, "name"> {}

export const OtherIcon: FC<Icon> = ({ name }) => {
  return (
    <View style={styles.icon}>
      <AntDesign name={name} style={{ color: "#EDF4FE" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: BLUE,
  },
});
