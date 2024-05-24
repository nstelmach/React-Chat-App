import { ChangeEvent, FunctionComponent, useRef, useState } from "react";
import { MessageSection } from "./MessageSection.tsx";

type MessageSectionContainerProps = {
  onSend: (newMessage: string) => void;
};

export const MessageSectionContainer: FunctionComponent<
  MessageSectionContainerProps
> = ({ onSend }) => {
  const [newMessage, setNewMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setNewMessage(value);
  };

  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onSendClick = () => {
    onSend(newMessage);
    setNewMessage("");
    setFocus();
  };

  return (
    <MessageSection
      inputRef={inputRef}
      message={newMessage}
      onChange={onInputChange}
      onSend={onSendClick}
    />
  );
};
