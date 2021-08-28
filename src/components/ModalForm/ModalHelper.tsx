import React from "react";
import Modal from "react-modal";

interface iModalProps {
  openCheck: boolean;
  styling: object;
  requestClose?: () => void;
  children: React.ReactNode;
}

export const basicLayoutModalStyle = {
  overlay: {
    zIndex: 999,
  },
};

export const authReplyMessageModalStyle = {
  basicLayoutModalStyle,
  content: {
    border: "2px solid black",
    width: "50rem",
    height: "24rem",
    margin: "auto",
  },
};

export const ModalHelper: React.FunctionComponent<iModalProps> = ({
  openCheck,
  styling,
  requestClose,
  children,
}) => {
  return (
    <div>
      <Modal isOpen={openCheck} onRequestClose={requestClose} style={styling}>
        {children}
      </Modal>
    </div>
  );
};
