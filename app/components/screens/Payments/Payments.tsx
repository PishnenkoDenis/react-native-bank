import { View, Text } from "react-native";
import { Title } from "../../ui/Title";
import { Layout } from "../../Layout/Layout";
import { Contacts } from "./Contacts/Contacts";
import { Other } from "./Other/Other";

export const Payments = () => {
  return (
    <Layout>
      <Title title="Payments" />
      <Contacts />
      <Other />
    </Layout>
  );
};
