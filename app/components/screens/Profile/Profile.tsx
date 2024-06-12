import { View, Text, StyleSheet, Alert } from "react-native";
import { useProfile } from "./useProfile";
import { Layout } from "../../Layout/Layout";
import { Title } from "../../ui/Title";
import { Loader } from "../../ui/Loader";
import { Field } from "../../ui/Field";
import { Button } from "../../ui/Button";
import { useAuth } from "../../../hooks/useAuth";
import { useUpdateProfile } from "./useUpdateProfile";
import { SUCCESS_COLOR } from "../../../constants";

export const Profile = () => {
  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();
  const { logout } = useAuth();

  const { isLoading, updateProfile, isSuccess } = useUpdateProfile(
    name,
    profile.docId
  );
  return (
    <Layout>
      <Title title="Profile" />
      {isSuccess && (
        <View style={styles.success}>
          <Text>Updated successfuly</Text>
        </View>
      )}
      {isProfileLoading || isLoading ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Field value={name} placeholder="Enter name" onChange={setName} />
          <Button onPress={updateProfile} title="Update profile" />
          <Button onPress={logout} title="Logout" />
        </View>
      )}
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    margin: 30,
    gap: 5,
  },

  success: {
    marginLeft: 30,
    marginRight: 30,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    padding: 3,
    borderRadius: 10,
    backgroundColor: SUCCESS_COLOR,
  },
  text: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
