import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { User } from "../../models/user.ts";

type UserProps = {
  user: User;
  onClick: (user: User) => void;
};

const UserBar = (props: UserProps) => {
  const { user, onClick } = props;

  return (
    <ListItemButton
      sx={{
        backgroundColor: "#d0dcea",
      }}
      onClick={() => onClick(user)}
    >
      <ListItemIcon>
        <AccountCircle sx={{ fontSize: 50 }} />
      </ListItemIcon>
      <ListItemText sx={{ fontSize: "20px" }}>{user.username}</ListItemText>
    </ListItemButton>
  );
};

export default UserBar;
