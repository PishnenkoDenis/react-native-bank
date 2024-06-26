import { Alert } from "react-native";
import { IAccount } from "../Home/Accounts/useAccounts";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";

export const handleTransfer = async (
  fromAccount: IAccount,
  cardNumber: string
) => {
  Alert.prompt("Sum transfer", "Enter the transfer amount", async (sum) => {
    try {
      let accountToId = "";
      let currentToBalance = "";

      const querySnapshot = await getDocs(
        query(
          collection(db, "accounts"),
          where("cardNumber", "==", cardNumber),
          limit(1)
        )
      );

      querySnapshot.docs.forEach((doc) => {
        accountToId = doc.id;
      });

      const docRefTo = doc(db, "accounts", accountToId);
      const docSnapTo = await getDoc(docRefTo);

      if (docSnapTo.exists()) {
        currentToBalance = docSnapTo.data().balance;
      } else {
        Alert.alert("The card where you are sending money was not found");
        return;
      }

      await updateDoc(docRefTo, {
        balance: currentToBalance + Number(sum),
      });

      const docRefFrom = doc(db, "accounts", fromAccount._id);

      await updateDoc(docRefFrom, {
        balance: fromAccount.balance - Number(sum),
      });

      return;
    } catch (error: any) {
      Alert.alert("Error transfer", error);
    }
  });
};
