import { View, Text, StyleSheet, Alert } from "react-native";
import { Button } from "../../../ui/Button";
import { asyncAlert } from "./asyncAlert";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";
import { getRandomCardNumber } from "../../../../utils/getRandomCardNumber";

export const ApplyButton = () => {
  const { user } = useAuth();

  const applyCard = async () => {
    try {
      const currency = await asyncAlert({
        title: "Currency",
        msg: "Select account currency",
        buttons: {
          text: "RUB",
          resolveValue: "RUB",
          textSecond: "USD",
          resolveValueSecond: "USD",
        },
      });
      const cardType = await asyncAlert({
        title: "Card type",
        msg: "Select a card type",
        buttons: {
          text: "Black",
          resolveValue: "Black",
          textSecond: "All Airlines",
          resolveValueSecond: "All Arlines",
        },
      });

      await addDoc(collection(db, "accounts"), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        balance: 0,
        cardNumber: getRandomCardNumber(),
        currency,
        name: cardType,
      });
    } catch (error: any) {
      Alert.alert("Apply card error", error);
    }
  };

  return (
    <View style={styles.container}>
      <Button onPress={applyCard} title="Apply new card" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
    paddingLeft: 5,
    paddingRight: 5,
  },
});
