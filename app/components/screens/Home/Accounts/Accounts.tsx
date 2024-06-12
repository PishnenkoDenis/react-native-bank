import { View, Text, StyleSheet } from "react-native";
import { useAccounts } from "./useAccounts";
import { Loader } from "../../../ui/Loader";
import { Fragment } from "react";
import { GRAY } from "../../../../constants";
import { AccountItem } from "../AccountItem/AccountItem";

export const Accounts = () => {
  const { accounts, isLoading } = useAccounts();

  return (
    <View>
      {isLoading ? (
        <Loader />
      ) : accounts.length ? (
        accounts.map((account, index) => (
          <Fragment key={account._id}>
            <View style={styles.account}>
              <AccountItem account={account} />
              {index + 1 !== accounts.length && <View style={styles.line} />}
            </View>
          </Fragment>
        ))
      ) : (
        <Text style={styles.text}>You don't have cards</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomColor: GRAY,
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  text: {
    textAlign: "center",
  },
  account: {
    marginLeft: 5,
  },
});
