import { Box, Typography } from "@mui/material";
import { UserList } from "./UserList.tsx";
import { User } from "../../models/user.ts";
import { usePostChatRoom } from "../../api/chatroom.ts";
import { useGetUsers } from "../../api/user.ts";
import { FunctionComponent } from "react";
import { useUserSlice } from "../../slice/userSlice.ts";

export const UserListContainer: FunctionComponent = () => {
  const { user: storeUser } = useUserSlice();
  const { data: users, error, isError, isLoading } = useGetUsers(5000);

  const activeUsers = users.filter((user) => user.id !== storeUser?.id) || [];

  const mutation = usePostChatRoom();

  const onOpenChatRoom = async (user: User) => {
    if (storeUser) {
      await mutation.mutateAsync([user.id, storeUser.id]);
    }
  };

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
        <Typography sx={{ fontSize: "24px" }}>Available Users</Typography>
      </Box>
      {isLoading && <Typography>Loading...</Typography>}
      {isError && <Typography>{error.message}</Typography>}
      {users && (
        <UserList activeUsers={activeUsers} openChatRoom={onOpenChatRoom} />
      )}
    </Box>
  );
};
