import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar } from "../../ui/Avatar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useProfile } from "../Profile/useProfile";
import { Loader } from "../../ui/Loader";

export const Header = () => {
  const { navigate } = useNavigation();
  const { isLoading, name } = useProfile();
  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.head}>
      <Avatar name={name} />
      <TouchableOpacity
        onPress={() => navigate("Profile")}
        style={styles.touch}
      >
        <Text style={styles.name}>{name}</Text>
        <Entypo name="chevron-small-right" size={28} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  touch: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  head: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
