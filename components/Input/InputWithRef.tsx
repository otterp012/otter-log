import React from "react";

type InputPropType = {
  inputInfo: {
    type: string;
    value?: string | number;
    placeholder?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  };
  label: string;
  style: string;
};

const Input = React.forwardRef<HTMLInputElement, InputPropType>(
  (props, ref) => {
    return (
      <>
        <label htmlFor={props.label} />
        <input
          id={props.label}
          {...props.inputInfo}
          className={props.style}
          ref={ref}
        />
      </>
    );
  },
);

export default Input;

Input.displayName = "Input";
