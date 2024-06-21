import { Box } from "@mui/material";
import { TopWrapper } from "../TopWrapper/TopWrapper.tsx";
import { MessagesList } from "../MessagesList/MessagesList.tsx";
import { MessageSectionContainer } from "../MessageSection/MessageSectionContainer.tsx";
import { FunctionComponent, useEffect } from "react";
import { getChatRoom, postMessage } from "../../api/chatroom.ts";
import { useUserSlice } from "../../slice/userSlice.ts";
import { setCurrentChatRoom, useChatSlice } from "../../slice/chatSlice.ts";
import { useAppDispatch } from "../../store/hooks.ts";

export const ChatWindow: FunctionComponent = () => {
  const { currentChatRoom } = useChatSlice();
  const { user } = useUserSlice();
  const dispatch = useAppDispatch();

  const recipient =
    currentChatRoom?.users.filter((u) => u.id !== user?.id) || [];

  const username = recipient.map((r) => r.username);

  const handleSendMessage = async (newMessage: string) => {
    if (!currentChatRoom || !user) {
      return;
    }

    postMessage({
      chatRoomId: currentChatRoom.id,
      text: newMessage,
      authorId: user.id,
    }).then((chatRoom) => {
      if (chatRoom) {
        dispatch(setCurrentChatRoom(chatRoom));
      }
    });
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout> | null = null;

    const polling = () => {
      if (!currentChatRoom) {
        return;
      }

      getChatRoom(currentChatRoom.id).then((chatRoom) => {
        if (chatRoom) {
          dispatch(setCurrentChatRoom(chatRoom));
        }
      });
    };

    if (currentChatRoom) {
      intervalId = setInterval(polling, 3000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [currentChatRoom, dispatch]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
      }}
    >
      <TopWrapper name={`Chat with ${username}`}>
        {user && (
          <MessagesList
            messages={currentChatRoom?.messages || []}
            loggedInUser={user}
          />
        )}
        <MessageSectionContainer onSend={handleSendMessage} />
      </TopWrapper>
    </Box>
  );
};
