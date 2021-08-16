import { TextField } from "@material-ui/core";
import React from "react";
import "./InputForm.scss";
import { withStyles } from "@material-ui/core/styles";

interface iInputFormProps {
  label: string;
  type: "text" | "password" | "email";
  value: string | number | undefined;
  name: string;
  handleChange: (e: any) => void;
  handleBlur?: (e: any) => void;
  styling: object;
  error?: boolean | undefined;
  helperText?: string | false | undefined;
  variant?: "standard" | "outlined" | undefined;
}

export const normalInputStyle = {
  width: "20rem",
  fontSize: "10rem",
  opacity: "0.9",
  marginTop: "1rem",
};

const CustomTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
  },
})(TextField);

export const InputForm: React.FunctionComponent<iInputFormProps> = ({
  label,
  type,
  value,
  name,
  handleChange,
  handleBlur,
  styling,
  error,
  helperText,
  variant,
}) => {
  return (
    <CustomTextField
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      style={styling}
      error={error}
      helperText={helperText}
      variant={variant}
    ></CustomTextField>
  );
};
