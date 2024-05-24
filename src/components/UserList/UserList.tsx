import { List } from "@mui/material";
import { User } from "../../models/user.ts";
import { UserBar } from "./UserBar.tsx";
import { FunctionComponent } from "react";

type UserListProps = {
  activeUsers: User[];
  openChatRoom: (user: User) => void;
};

export const UserList: FunctionComponent<UserListProps> = ({
  activeUsers,
  openChatRoom,
}) => {
  return (
    <List>
      {activeUsers.map((user) => (
        <UserBar key={user.id} user={user} onClick={openChatRoom} />
      ))}
    </List>
  );
};
