import { useState } from "react";

export const useFormattedInput = (
  initialValue: string
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [number, setValue] = useState(initialValue);

  const numberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.replace(/(\d{2})(?=\d)/g, "$1-");
    setValue(formattedValue);
  };

  return [number, numberChange];
};
