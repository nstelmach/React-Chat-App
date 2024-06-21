import { ChatRoom } from "../models/user.ts";
import {
  createContext,
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUserSlice } from "../slice/userSlice.ts";
import { getOpenChatRooms } from "../api/chatroom.ts";

type ChatStore = {
  chatRooms: ChatRoom[];
  setChatRooms: Dispatch<ChatRoom[]>;
  currentChatRoom: ChatRoom | null;
  setCurrentChatRoom: Dispatch<ChatRoom | null>;
};

const ChatStore = createContext<ChatStore>({
  chatRooms: [],
  setChatRooms: () => {},
  currentChatRoom: null,
  setCurrentChatRoom: () => {},
});

export const ChatStoreProvider: FunctionComponent<
  PropsWithChildren<unknown>
> = ({ children }) => {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([]);
  const [currentChatRoom, setCurrentChatRoom] = useState<ChatRoom | null>(null);
  const { user } = useUserSlice();

  useEffect(() => {
    if (user) {
      getOpenChatRooms(user.id).then((chatRooms) => {
        setChatRooms(chatRooms);
      });
    }
  }, [user]);

  return (
    <ChatStore.Provider
      value={{
        chatRooms,
        setChatRooms,
        currentChatRoom,
        setCurrentChatRoom,
      }}
    >
      {children}
    </ChatStore.Provider>
  );
};

export const useChatStore = () => {
  const chatStore = useContext(ChatStore);

  return {
    chatRooms: chatStore.chatRooms,
    setChatRooms: chatStore.setChatRooms,
    currentChatRoom: chatStore.currentChatRoom,
    setCurrentChatRoom: chatStore.setCurrentChatRoom,
  };
};
