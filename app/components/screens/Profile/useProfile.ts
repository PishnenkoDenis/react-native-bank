import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";
import {
  collection,
  limit,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase";

export interface IProfile {
  _id: string;
  displayName: string;
  docId: string;
}

export const useProfile = () => {
  const { user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState<IProfile>({} as IProfile);

  const [name, setName] = useState("");

  useEffect(() => {
    onSnapshot(
      query(collection(db, "users"), where("_id", "==", user?.uid), limit(1)),
      (snpshot) => {
        const profile = snpshot.docs.map((doc) => ({
          ...(doc.data() as IProfile),
          docId: doc.id,
        }))[0];
        setProfile(profile);
        setName(profile.displayName);
        setIsLoading(false);
      }
    );
  }, []);

  const value = useMemo(
    () => ({
      isLoading,
      profile,
      name,
      setName,
    }),
    [isLoading, profile, name]
  );

  return value;
};
