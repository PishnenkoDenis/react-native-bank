import { FC } from "react";
import { TCurrency } from "../Accounts/useAccounts";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { BLUE } from "../../../../constants";

export const Currency: FC<{ currency: TCurrency }> = ({ currency }) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inner}>
        <FontAwesome
          color={"#488CF9"}
          size={15}
          name={currency === "RUB" ? "ruble" : "dollar"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: BLUE,
  },
  inner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "#EDF4FE",
  },
});
