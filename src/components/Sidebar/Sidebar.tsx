import { Box } from "@mui/material";
import { UserListContainer } from "../UserList/UserListContainer.tsx";
import { TopWrapper } from "../TopWrapper/TopWrapper.tsx";
import { FunctionComponent } from "react";
import { useUserSlice } from "../../slice/userSlice.ts";
import { ChatRoomListContainer } from "../ChatRoomList/ChatRoomListContainer.tsx";

export const Sidebar: FunctionComponent = () => {
  const { user } = useUserSlice();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "400px",
        overflowY: "scroll",
      }}
    >
      {user && (
        <TopWrapper name={user.username}>
          <ChatRoomListContainer />
          <UserListContainer />
        </TopWrapper>
      )}
    </Box>
  );
};
