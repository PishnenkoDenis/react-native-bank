import { Alert } from "react-native";

interface IButtons {
  text: string;
  resolveValue: string;
  textSecond: string;
  resolveValueSecond: string;
}

interface IAsyncAlert {
  title: string;
  msg?: string;
  buttons: IButtons;
}

export const asyncAlert = async ({ title, msg, buttons }: IAsyncAlert) => {
  return new Promise((res) =>
    Alert.alert(
      title,
      msg,
      [
        {
          text: buttons.text,
          onPress: () => res(buttons.resolveValue),
        },
        {
          text: buttons.textSecond,
          onPress: () => res(buttons.resolveValueSecond),
        },
      ],
      { cancelable: false }
    )
  );
};
