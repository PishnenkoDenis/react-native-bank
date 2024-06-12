import { FC } from "react";
import { IAccount } from "../Accounts/useAccounts";
import {
  ImageBackground,
  ImageSourcePropType,
  StyleSheet,
  Text,
} from "react-native";

export const ImageCard: FC<{ account: IAccount }> = ({
  account: { name, cardNumber },
}) => {
  const black: ImageSourcePropType = require("../../../../../assets/bankcard.jpeg");
  const airlines: ImageSourcePropType = require("../../../../../assets/bankcard3.jpg");
  return (
    <ImageBackground
      source={name === "Black" ? black : airlines}
      resizeMode="contain"
      style={styles.img}
    >
      <Text style={styles.number}>{cardNumber.slice(-4)}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  img: {
    display: "flex",
    justifyContent: "flex-end",
    width: 80,
    height: 60,
    padding: 8,
  },
  number: {
    color: "white",
    fontSize: 11,
  },
});
