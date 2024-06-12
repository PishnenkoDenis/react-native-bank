import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../firebase";

export interface IStories {
  _id: string;
  heading: string;
  image: string[];
}

export const useStories = () => {
  const [stories, setStories] = useState<IStories[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(query(collection(db, "stories")), (snapshot) => {
        setStories(
          snapshot.docs.map(
            (doc) =>
              ({
                _id: doc.id,
                ...doc.data(),
              } as IStories)
          )
        );
        setIsLoading(false);
      }),
    []
  );

  return { isLoading, stories };
};
