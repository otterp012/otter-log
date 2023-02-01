type InputWithLabel = {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
  labelProps: React.LabelHTMLAttributes<HTMLLabelElement>;
  labelName?: string;
};

const InputWithLabel = (props: InputWithLabel) => {
  const { labelProps, inputProps, labelName } = props;
  return (
    <>
      <label {...labelProps}>{labelName}</label>
      <input {...inputProps} />
    </>
  );
};

export default InputWithLabel;
