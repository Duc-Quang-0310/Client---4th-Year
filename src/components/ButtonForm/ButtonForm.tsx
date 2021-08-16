import { Button } from "@material-ui/core";
import React from "react";
import "./ButtonForm.scss";

interface iButtonFormProps {
  styling: Object;
  className?: string;
  handleSubmitEvent?: () => void;
  isLoading?: boolean;
  buttonName: string;
}

export const authButtonStyle = {
  background: "#00bfa6",
  borderRadius: "2rem",
  color: "white",
  fontSize: "1.3rem",
  padding: "0.4em 5em",
  textTransform: "none",
  marginTop: "3.5rem",
};

export const ButtonForm: React.FunctionComponent<iButtonFormProps> = ({
  styling,
  className,
  handleSubmitEvent,
  buttonName,
  isLoading,
}): React.ReactElement => {
  return (
    <Button
      className={`${className} disable`}
      style={styling}
      onClick={handleSubmitEvent}
      disabled={isLoading}
      type="submit"
    >
      {buttonName}
    </Button>
  );
};
