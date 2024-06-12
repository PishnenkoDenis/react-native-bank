import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { IContact } from "./Contacts";
import { Avatar } from "../../../ui/Avatar";
import { useAccounts } from "../../Home/Accounts/useAccounts";
import { handleTransfer } from "../handleTransfer";

export const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
  const { accounts } = useAccounts();
  return (
    <Pressable
      style={styles.wrapper}
      onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}
    >
      <Avatar name={contact.displayName} />
      <Text style={styles.text}>{contact.displayName}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    alignItems: "center",
    marginLeft: 4,
    marginRight: 1,
  },
  text: {
    marginTop: 1,
    fontSize: 12,
  },
});
