import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { AuthProvider } from "./app/providers/AuthProvider";
import { Navigation } from "./app/navigation/Navigation";
import { DataProvider } from "./app/providers/DataProvider";
import { StoryContainer } from "./app/components/screens/Home/Stories/StoryContainer";

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
}
