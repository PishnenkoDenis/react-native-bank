import { FC, ReactNode } from "react";
import { ScrollView, View } from "react-native";
import { useTailwind } from "tailwind-rn";

interface ILayout {
  isScrollView?: boolean;
  children: ReactNode;
}

export const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  const tw = useTailwind();
  return (
    <View style={tw("h-full w-full bg-white pt-16")}>
      {isScrollView ? <ScrollView>{children}</ScrollView> : children}
    </View>
  );
};
