import React from "react";
import "./Input.css";

interface InputProps {
  id: string;
  value: string | number;
  name: string;
  labelText: string;
  pattern: string;
  maxLength: number;
  onChange: (value: string) => void;
}

const Input = ({
  id,
  onChange,
  value,
  name,
  maxLength,
  pattern,
  labelText,
}: InputProps) => {
  const compoundId = `${id}-input-${name}`;

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const valueInput = event.currentTarget.value;
    if (event.currentTarget.validity.valid) {
      onChange(valueInput);
    }
  };

  return (
    <>
      <label htmlFor={compoundId} className="label">
        {labelText}
      </label>
      <input
        id={compoundId}
        type="text"
        className="input"
        name={name}
        value={value}
        maxLength={maxLength}
        pattern={pattern}
        onChange={handleOnChange}
      />
    </>
  );
};

export default Input;
