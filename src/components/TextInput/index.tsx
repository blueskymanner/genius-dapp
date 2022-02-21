import React, { useState } from "react";
import { Input, Label, TextInputContainer } from "./styles";

interface ITextInputProps {
  label?: string;
  placeHolder?: string;
  handleChange: (value: string) => void;
  initialValue?: string;
}

const TextInput: React.FC<ITextInputProps> = ({
  label,
  placeHolder,
  initialValue,
  handleChange,
}) => {
  const [value, setValue] = useState<string>(initialValue || "");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <TextInputContainer>
      <Label>{label}</Label>
      <Input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </TextInputContainer>
  );
};

export default TextInput;
