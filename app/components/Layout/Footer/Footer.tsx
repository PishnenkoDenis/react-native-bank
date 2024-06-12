import { StyleSheet, View } from "react-native";
import { LIGHT_GRAY } from "../../../constants";
import { AntDesign } from "@expo/vector-icons";
import { TRootStackParamList } from "../../../navigation/types";
import { menu } from "./menu";
import { FooterItem } from "./FooterItem";
import { FC } from "react";

export interface IFooterItem {
  name: keyof typeof AntDesign.glyphMap;
  title: keyof TRootStackParamList;
}

interface IFooter {
  navigate: (screenName: keyof TRootStackParamList) => void;
  currentRoute?: string;
}

export const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  return (
    <View style={styles.wrapper}>
      {menu.map((item) => (
        <FooterItem
          item={item}
          navigate={navigate}
          currentRoute={currentRoute}
          key={item.name}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 5,
    paddingTop: 3,
    borderTopColor: "#E1E1E1",
    borderTopWidth: 1,
    backgroundColor: LIGHT_GRAY,
  },
});
