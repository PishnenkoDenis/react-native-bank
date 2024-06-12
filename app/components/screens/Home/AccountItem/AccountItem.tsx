import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { IAccount } from "../Accounts/useAccounts";
import { Currency } from "./Currency";
import { Balance } from "./Balance";
import { ImageCard } from "./ImageCard";

export const AccountItem: FC<{ account: IAccount }> = ({ account }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <Currency currency={account.currency} />
        <Balance account={account} />
      </View>
      <ImageCard account={account} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    width: "100%",
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    alignSelf: "center",
  },
});
