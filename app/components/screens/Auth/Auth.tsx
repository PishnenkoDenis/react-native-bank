import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import { Loader } from "../../ui/Loader";
import { Field } from "../../ui/Field";
import { Button } from "../../ui/Button";

interface IData {
  email: string;
  password: string;
}

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [data, setData] = useState<IData>({} as IData);
  const { isLoading, register, login } = useAuth();

  const authHandler = async (data: IData) => {
    const { email, password } = data;
    isRegister ? await login(email, password) : await register(email, password);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.title}>{isRegister ? "Sign In" : "Sign Up"}</Text>
          {isLoading ? (
            <Loader />
          ) : (
            <View style={styles.fields}>
              <Field
                value={data.email}
                onChange={(value) => setData({ ...data, email: value })}
                placeholder="Email"
              />
              <Field
                value={data.password}
                onChange={(value) => setData({ ...data, password: value })}
                placeholder="Password"
                isSecure={true}
              />
              <Button onPress={() => authHandler(data)} title="Authorize" />
              <Pressable onPress={() => setIsRegister(!isRegister)}>
                <Text style={styles.text}>
                  {isRegister ? "Login" : "Register"}
                </Text>
              </Pressable>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    paddingTop: 16,
  },
  container: {
    marginLeft: 5,
    marginRight: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  inner: {
    width: "70%",
  },
  title: {
    marginBottom: 3,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  fields: {
    display: "flex",
    gap: 5,
  },
  text: {
    textAlign: "right",
  },
});
