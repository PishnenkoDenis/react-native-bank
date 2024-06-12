import { FC } from "react";
import { IService } from "./Services";
import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { Percent } from "./Percent";

export const ServiceItem: FC<{ service: IService }> = ({ service }) => {
  return (
    <View style={{ marginBottom: 5 }}>
      <View style={styles.wrapper}>
        <LinearGradient colors={["#FF4270", "FE0040"]} style={styles.gradient}>
          <Percent percent={service.percent} />
          <MaterialIcons size={30} name={service.iconName} color={"#fff"} />
        </LinearGradient>
      </View>
      <Text style={styles.title}>{service.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    overflow: "hidden",
  },
  title: {
    marginTop: 6,
    textAlign: "center",
    fontSize: 12,
  },
  gradient: {
    display: "flex",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
