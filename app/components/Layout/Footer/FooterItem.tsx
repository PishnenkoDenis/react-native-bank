import { FC } from "react";
import { IFooterItem } from "./Footer";
import { Pressable, StyleSheet, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TRootStackParamList } from "../../../navigation/types";

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TRootStackParamList) => void;
  currentRoute?: string;
}

export const FooterItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
  const isActive = currentRoute === item.title;
  return (
    <Pressable onPress={() => navigate(item.title)} style={styles.wrapper}>
      <AntDesign
        name={item.name}
        style={{ color: isActive ? "blue" : "gray", fontSize: 15 }}
      />
      <Text
        style={{
          color: isActive ? "blue" : "gray",
          fontSize: 15,
          marginTop: 1,
        }}
      >
        {item.title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "20%",
    display: "flex",
    alignItems: "center",
  },
});
