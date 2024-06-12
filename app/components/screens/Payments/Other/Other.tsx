import { ScrollView, StyleSheet, View } from "react-native";
import { IFooterItem } from "../../../Layout/Footer/Footer";
import { SubTitle } from "../../../ui/SubTitle";
import { otherItems } from "./data";
import { OtherItem } from "./OtherItem/OtherItem";

export interface IOtherItem extends Pick<IFooterItem, "name"> {
  title: string;
}

export const Other = () => {
  return (
    <View style={styles.other}>
      <SubTitle title="Important transfers" />
      <ScrollView
        style={{ padding: 5, marginTop: 5 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {otherItems.map((item) => (
          <OtherItem key={item.name} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  other: {},
});
