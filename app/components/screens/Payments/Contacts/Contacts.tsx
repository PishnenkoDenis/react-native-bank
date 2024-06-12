import { ScrollView, StyleSheet, View } from "react-native";
import { useContacts } from "./useContacts";
import { Loader } from "../../../ui/Loader";
import { SubTitle } from "../../../ui/SubTitle";
import { ContactItem } from "./ContactItem";

export interface IContact {
  _id: string;
  displayName: string;
  cardNumber: string;
}

export const Contacts = () => {
  const { contacts, isLoading } = useContacts();
  return (
    <View>
      <SubTitle title="Phone transfers" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 5 }}
        >
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact._id} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contacts: {
    marginLeft: 8,
    marginRight: 8,
  },
});
