import React from "react";

interface iChatListProps {
  name: string;
  isAdmin: Boolean;
  imageUrl: string;
}

export const ChatList: React.FC<iChatListProps> = ({
  name,
  isAdmin,
  imageUrl,
}) => {
  return (
    <div className="chat-list">
      <div className="chat-list_header">
        <img style={{ objectFit: "cover" }} src={imageUrl} alt="" />
        <h2>Chat</h2>
      </div>
      <img style={{ paddingBlock: "3rem" }} src="/img/logo-color.svg" alt="" />
      <p
        style={{
          fontSize: "21px",
          paddingInline: "2.3em",
          textAlign: "center",
        }}
      >
        Hello <b>{name}</b>, You are chatting with
        {isAdmin ? <b> client</b> : <b> our teams</b>}
      </p>
    </div>
  );
};
