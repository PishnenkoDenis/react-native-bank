import { useEffect, useState } from "react";
import { IContact } from "./Contacts";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";

export const useContacts = () => {
  const { user } = useAuth();
  const [contacts, setContacts] = useState<IContact[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    () =>
      onSnapshot(query(collection(db, "users")), (snapshot) => {
        setContacts(
          snapshot.docs.map(
            (doc) =>
              ({
                _id: doc.id,
                ...doc.data(),
              } as IContact)
          )
        );
        setIsLoading(false);
      }),
    []
  );

  return { contacts, isLoading };
};
