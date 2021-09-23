import React, { useState, useRef } from "react";
import { ButtonForm } from "../../../components/ButtonForm/ButtonForm";
import { Send } from "@material-ui/icons/";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { baseURL } from "../../../services/api/axiosAddress";

const BtnSendStyle = {
  padding: "0.6rem 1rem",
  background: "#00bfa6",
  textTransform: "none",
  color: "#fff",
  fontSize: "1rem",
};

interface iChatDialog {
  name: string;
  imgLink: string;
  id: string;
}

interface iChatDialogProps extends iChatDialog {
  params: string;
}

interface iConversation extends iChatDialog {
  message: string;
}

export const ChatDialog: React.FC<iChatDialogProps> = ({
  params,
  name,
  imgLink,
  id,
}) => {
  const socket = io(baseURL);
  const [state, setState] = useState<iConversation>({
    message: "",
    name: name,
    id: id,
    imgLink: imgLink,
  });
  const [conversations, setConversations] = useState<Array<iConversation>>([]);
  const messageEndRef = useRef<any>(null);

  useEffect(() => {
    socket.on("message", ({ message, name, id, imgLink }) => {
      setConversations([...conversations, { message, name, id, imgLink }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [conversations]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView();
  }, [conversations]);

  const onSubmitMessage = () => {
    const { message, name, id, imgLink } = state;
    socket.emit("message", { message, name, id, imgLink });
    setState({ message: "", name: name, id: id, imgLink: imgLink });
  };

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const renderChat = () => {
    return conversations.map((conversation, index) => {
      return conversation.id === id ? (
        <div className="chat-dialog-content reverse-flex" key={index}>
          <div className="chat-bubble ">
            <img
              style={{ objectFit: "cover" }}
              src={conversation.imgLink}
              alt=""
            />
            <div className="bubble-text user-bubble">
              <p style={{ padding: "1rem" }}>{conversation.message}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-dialog-content" key={index}>
          <div className="chat-bubble">
            <img
              style={{ objectFit: "cover" }}
              src={conversation.imgLink}
              alt=""
            />
            <div className="bubble-text">
              <p style={{ padding: "1rem" }}>{conversation.message}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="chat-dialog">
      <div className="chat-dialog_header"></div>
      <div className="chat-hero">
        {renderChat()}
        <div ref={messageEndRef} />
      </div>
      <div className="chat-dialog-input">
        <input
          type="text"
          className="input-main"
          placeholder="What would you like to know ?"
          name="message"
          value={state.message}
          onChange={(e) => onTextChange(e)}
          onKeyDown={(e) => e.key === "Enter" && onSubmitMessage()}
        />
        <ButtonForm
          styling={BtnSendStyle}
          buttonName="Send"
          endIcon={<Send />}
          handleSubmitEvent={() => onSubmitMessage()}
        />
      </div>
    </div>
  );
};
