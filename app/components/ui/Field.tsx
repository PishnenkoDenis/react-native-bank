import { FC } from "react";
import { StyleSheet, TextInput } from "react-native";
import { GRAY } from "../../constants";

interface IField {
  onChange: (value: string) => void;
  value: string;
  placeholder: string;
  isSecure?: boolean;
}

export const Field: FC<IField> = ({
  onChange,
  value,
  placeholder,
  isSecure,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: GRAY,
    marginTop: 3,
    padding: 5,
    width: "100%",
    borderRadius: 10,
  },
});
