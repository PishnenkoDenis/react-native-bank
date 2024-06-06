import { createContext, useEffect, useMemo, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { User, onAuthStateChanged } from "firebase/auth";
import { Alert } from "react-native";
import { auth, db, login, logout, register } from "../firebase";

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, "users"), {
        _id: user.uid,
        displayName: "No name",
      });
    } catch (error) {
      Alert.alert(`Register error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(`Login error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error) {
      Alert.alert(`Logout error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setIsLoadingInitial(false);
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      isLoading,
      register: handleRegister,
      login: handleLogin,
      logout: handleLogout,
    }),
    [user, isLoading]
  );

  return (
    <AuthContext.Provider value={value}>
      {!isLoadingInitial && children}
    </AuthContext.Provider>
  );
};
