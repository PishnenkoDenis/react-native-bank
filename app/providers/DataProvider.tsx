import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

interface IContext {
  activeStories: string[] | null;
  setActiveStories: Dispatch<SetStateAction<string[] | null>>;
}

export const DataContext = createContext({} as IContext);

export const DataProvider: FC<PropsWithChildren> = ({ children }) => {
  const [activeStories, setActiveStories] = useState<string[] | null>(null);

  const value = useMemo(
    () => ({
      activeStories,
      setActiveStories,
    }),
    [activeStories]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
