import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { Auth } from "../components/screens/Auth/Auth";
import { Home } from "../components/screens/Home/Home";
import { Payments } from "../components/screens/Payments/Payments";
import { Services } from "../components/screens/Services/Services";
import { More } from "../components/screens/More/More";
import { Support } from "../components/screens/Support/Support";
import { Profile } from "../components/screens/Profile/Profile";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="More" component={More} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
