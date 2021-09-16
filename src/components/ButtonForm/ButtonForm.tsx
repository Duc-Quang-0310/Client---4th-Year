import { Button } from "@material-ui/core";
import React from "react";
import "./ButtonForm.scss";

interface iButtonFormProps {
  styling: Object;
  className?: string;
  handleSubmitEvent?: (e: any) => void;
  isLoading?: boolean;
  buttonName: string;
  endIcon?: React.ReactNode;
}

export const authButtonStyle = {
  background: "#00bfa6",
  borderRadius: "2rem",
  color: "white",
  fontSize: "1.3rem",
  padding: "0.4em 5em",
  textTransform: "none",
  marginBlock: "3.5rem",
};

const authDisableStyle = {
  background: "#dcdcdc",
  borderRadius: "2rem",
  color: "white",
  fontSize: "1.3rem",
  padding: "0.4em 5em",
  textTransform: "none",
  marginBlock: "3.5rem",
};

export const ButtonForm: React.FunctionComponent<iButtonFormProps> = ({
  styling,
  className,
  handleSubmitEvent,
  buttonName,
  isLoading,
  endIcon,
}): React.ReactElement => {
  return (
    <Button
      className={`${className}}`}
      style={isLoading ? authDisableStyle : styling}
      onClick={handleSubmitEvent}
      disabled={isLoading}
      type="submit"
      endIcon={endIcon}
    >
      {isLoading ? <p>Đang xử lý ...</p> : buttonName}
    </Button>
  );
};
