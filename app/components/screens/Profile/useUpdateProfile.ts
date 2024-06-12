import { useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import { Alert } from "react-native";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export const useUpdateProfile = (name: string, docId: string) => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateProfile = async () => {
    setIsLoading(true);

    if (!user) {
      return;
    }

    try {
      const docRef = doc(db, "users", docId);
      await updateDoc(docRef, {
        displayName: name,
      });
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      Alert.alert(`Update profile error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, isSuccess, updateProfile };
};
