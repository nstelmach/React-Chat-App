import { Box, Typography } from "@mui/material";
import { ChatWindow } from "./ChatWindow.tsx";
import { FunctionComponent } from "react";
import { useChatSlice } from "../../slice/chatSlice.ts";

export const ChatWindowContainer: FunctionComponent = () => {
  const { currentChatRoom } = useChatSlice();

  return currentChatRoom ? (
    <ChatWindow />
  ) : (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexGrow: 1,
      }}
    >
      <Typography variant="h4">Select your chat</Typography>
    </Box>
  );
};
