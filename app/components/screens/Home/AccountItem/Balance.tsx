import { FC } from "react";
import { IAccount } from "../Accounts/useAccounts";
import { StyleSheet, Text, View } from "react-native";

export const Balance: FC<{ account: IAccount }> = ({
  account: { balance, currency, name },
}) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.balance}>
        {Intl.NumberFormat(undefined, {
          currency,
          style: "currency",
        }).format(balance)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 15,
  },
  balance: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 2,
  },
});
