import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { ChatRoom } from "../../models/user.ts";
import { FunctionComponent } from "react";
import { useUserSlice } from "../../slice/userSlice.ts";

type ChatRoomBarProps = {
  chatRoom: ChatRoom;
  onClick: (chat: ChatRoom) => void;
  isSelected: boolean;
};

export const ChatRoomBar: FunctionComponent<ChatRoomBarProps> = ({
  chatRoom,
  onClick,
  isSelected,
}) => {
  const { user } = useUserSlice();

  const users = chatRoom.users.filter((u) => u.id !== user?.id);

  return (
    <ListItemButton
      selected={isSelected}
      sx={{
        backgroundColor: "#d0dcea",
      }}
      onClick={() => onClick(chatRoom)}
    >
      <ListItemIcon>
        <AccountCircle sx={{ fontSize: 50 }} />
      </ListItemIcon>
      <ListItemText sx={{ fontSize: "20px" }}>
        {users.map((u) => u.username).join(", ")}
      </ListItemText>
    </ListItemButton>
  );
};
