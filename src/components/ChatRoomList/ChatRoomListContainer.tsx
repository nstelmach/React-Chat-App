import { Box, Typography } from "@mui/material";
import UserList from "./UserList.tsx";

const ChatroomList = () => {
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
      <UserList activeUsers={activeUsers} openChatroom={onOpenChatroom} />
    </Box>
  );
};

export default ChatroomList;
