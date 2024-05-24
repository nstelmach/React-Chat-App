import { Box } from "@mui/material";
import { Sidebar } from "../components/Sidebar/Sidebar.tsx";
import { ChatWindowContainer } from "../components/ChatWindow/ChatWindowContainer.tsx";
import { Page } from "../models/page.ts";

export const ChatPage: Page = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "100vh" }}>
      <Sidebar />
      <ChatWindowContainer />
    </Box>
  );
};

ChatPage.path = "/chat";
