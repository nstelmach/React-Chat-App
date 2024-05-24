import "@testing-library/jest-dom";

import { UserList } from "./UserList.tsx";
import { User } from "../../models/user.ts";
import { render, screen } from "@testing-library/react";

const mockUsers: User[] = [
  { id: "1", username: "User 1" },
  { id: "2", username: "User 2" },
];

const openChatroomMock = vi.fn();

describe("UserList Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  test("renders user list items", () => {
    render(
      <UserList activeUsers={mockUsers} openChatRoom={openChatroomMock} />,
    );

    mockUsers.forEach((user) => {
      const userListItem = screen.getByText(user.username);
      expect(userListItem).toBeInTheDocument();
    });
  });

  test("calls openChatroom when user is clicked", () => {
    render(
      <UserList activeUsers={mockUsers} openChatRoom={openChatroomMock} />,
    );

    mockUsers.forEach((user) => {
      const userListItem = screen.getByText(user.username);
      userListItem.click();
      expect(openChatroomMock).toHaveBeenCalled();
    });
  });
});
