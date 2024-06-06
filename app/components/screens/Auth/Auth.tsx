import { useState } from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

export const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const tw = useTailwind();
  return (
    <View style={tw("h-full w-full bg-white pt-16")}>
      <View style={tw("mx-5 justify-center items-center h-wull")}>
        <View style={tw("w-9/12")}>
          <Text style={tw("text-center text-gray-800 text-2xl font-bold mb-2")}>
            {isRegister ? "Sign In" : "Sign Up"}
          </Text>
        </View>
      </View>
    </View>
  );
};
