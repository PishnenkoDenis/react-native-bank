import { FC } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { IOtherItem } from "../Other";
import { OtherIcon } from "./OtherIcon";
import { BOX_SHADOW } from "../../../../../styles";
import { useAccounts } from "../../../Home/Accounts/useAccounts";
import { handleTransfer } from "../../handleTransfer";

const CASH_CARD_NUMBER = "4152 9498 1478 8863";

export const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
  const { accounts } = useAccounts();
  return (
    <Pressable
      style={styles.press}
      onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}
    >
      <OtherIcon name={item.name} />
      <Text style={{ fontSize: 15 }}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  press: {
    marginLeft: 5,
    marginBottom: 7,
    padding: 5,
    width: 100,
    height: 100,
    backgroundColor: "white",
    borderRadius: 10,
    ...BOX_SHADOW,
  },
});
