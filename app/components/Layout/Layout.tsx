import { FC, ReactNode } from "react";
import { ScrollView, StyleSheet, View } from "react-native";

interface ILayout {
  isScrollView?: boolean;
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  return (
    <View style={styles.layout}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 16,
  },
});
