import {
  NavigationContainer,
  useNavigationContainerRef,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../hooks/useAuth";
import { Auth } from "../components/screens/Auth/Auth";
import { Home } from "../components/screens/Home/Home";
import { Payments } from "../components/screens/Payments/Payments";
import { Services } from "../components/screens/Services/Services";
import { More } from "../components/screens/More/More";
import { Support } from "../components/screens/Support/Support";
import { Profile } from "../components/screens/Profile/Profile";
import { Footer } from "../components/Layout/Footer/Footer";
import { useEffect, useState } from "react";

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  const { user } = useAuth();
  const navRef = useNavigationContainerRef();

  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timerId = setTimeout(
      () => setName(navRef.getCurrentRoute()?.name),
      100
    );

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    const listener = navRef.addListener("state", () =>
      setName(navRef.getCurrentRoute()?.name)
    );

    return () => navRef.removeListener("state", listener);
  }, []);

  return (
    <>
      <NavigationContainer ref={navRef}>
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
      {user && <Footer navigate={navRef.navigate} currentRoute={name} />}
    </>
  );
};
