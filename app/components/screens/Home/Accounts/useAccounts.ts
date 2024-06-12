import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";
import { useAuth } from "../../../../hooks/useAuth";

export type TCurrency = "RUB" | "USD";
export type TName = "Black" | "All Airlanes";

export interface IAccount {
  _id: string;
  userId: string;
  balance: number;
  cardNumber: string;
  currency: TCurrency;
  name: TName;
}

export const useAccounts = () => {
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "accounts"), where("userId", "==", user?.uid)),
        (snapshot) => {
          setAccounts(
            snapshot.docs.map(
              (doc) =>
                ({
                  _id: doc.id,
                  ...doc.data(),
                } as IAccount)
            )
          );
          setIsLoading(false);
        }
      ),
    []
  );

  return { isLoading, accounts };
};
