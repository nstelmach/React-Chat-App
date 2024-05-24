import { Box, Typography } from "@mui/material";
import { ChatRoomList } from "./ChatRoomList.tsx";
import { FunctionComponent } from "react";

export const ChatRoomListContainer: FunctionComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ fontSize: "20px", backgroundColor: "#dddddd", padding: "5px" }}
      >
        <Typography sx={{ fontSize: "24px" }}>Open Chats</Typography>
      </Box>
      <ChatRoomList />
    </Box>
  );
};
