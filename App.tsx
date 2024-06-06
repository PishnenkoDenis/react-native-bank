import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { AuthProvider } from "./app/providers/AuthProvider";
import { Navigation } from "./app/navigation/Navigation";

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
}
