import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { services } from "./data";
import { ServiceItem } from "./ServiceItem";

export interface IService {
  iconName: keyof typeof MaterialIcons.glyphMap;
  title: string;
  percent: number;
}

export const Services = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.title}>Taganrog</Text>
      <View style={styles.container}>
        {services.map((service, index) => (
          <ServiceItem service={service} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 8,
    textAlign: "center",
    fontSize: 17,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "row",
  },
  layout: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 16,
    marginTop: 30,
  },
});
