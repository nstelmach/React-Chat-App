import { List } from "@mui/material";
import { FunctionComponent } from "react";
import { setCurrentChatRoom, useChatSlice } from "../../slice/chatSlice.ts";
import { useAppDispatch } from "../../store/store.ts";
import { useGetOpenChatRooms } from "../../api/chatroom.ts";
import { useUserSlice } from "../../slice/userSlice.ts";
import { ChatRoomBar } from "./ChatRoomBar.tsx";

export const ChatRoomList: FunctionComponent = () => {
  const { user } = useUserSlice();
  const { data: openChatRooms = [] } = useGetOpenChatRooms(user);
  const { currentChatRoom } = useChatSlice();
  const dispatch = useAppDispatch();

  return (
    <List>
      {openChatRooms.map((chatRoom) => (
        <ChatRoomBar
          isSelected={chatRoom.id === currentChatRoom?.id}
          key={chatRoom.id}
          chatRoom={chatRoom}
          onClick={(chat) => {
            dispatch(setCurrentChatRoom(chat));
          }}
        />
      ))}
    </List>
  );
};
