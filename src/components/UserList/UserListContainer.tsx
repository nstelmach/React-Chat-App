import { Box, List, Typography } from "@mui/material";
import { User } from "../../models/user.ts";
import UserBar from "../UserBar/UserBar.tsx";

type UserListProps = {
  title: string;
  activeUsers: User[];
  openChatroom: (user: User) => void;
};

const UserList = (props: UserListProps) => {
  const { title, activeUsers, openChatroom } = props;

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
        <Typography sx={{ fontSize: "24px" }}>{title}</Typography>
      </Box>
      <List>
        {activeUsers.map((user) => (
          <UserBar key={user.id} user={user} onClick={openChatroom} />
        ))}
      </List>
    </Box>
  );
};

export default UserList;
