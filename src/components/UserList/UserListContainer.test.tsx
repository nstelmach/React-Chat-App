import "@testing-library/jest-dom";

import { UserListContainer } from "./UserListContainer.tsx";
import { screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import { renderWithProviders } from "../../utils/render-with-providers.tsx";

vi.mock("react-query", () => ({
  useQuery: vi.fn().mockReturnValue({
    data: [
      { id: "1", username: "User 1" },
      { id: "2", username: "User 2" },
    ],
    isLoading: false,
    isError: false,
    error: {},
  }),
}));

describe("UserListContainer Component", () => {
  test("renders Available Users Blocks", () => {
    renderWithProviders(<UserListContainer />);

    expect(screen.getByText("Available Users")).toBeInTheDocument();
  });

  test("renders userList", () => {
    renderWithProviders(<UserListContainer />);

    waitFor(() => {
      expect(screen.getByText("User 1")).toBeInTheDocument();
      expect(screen.getByText("User 2")).toBeInTheDocument();
    });
  });

  test("renders error", () => {
    vi.mock("react-query", () => ({
      useQuery: vi.fn().mockReturnValue({
        data: [],
        isLoading: false,
        isError: true,
        error: { message: "Error!" },
      }),
    }));

    renderWithProviders(<UserListContainer />);

    waitFor(() => {
      expect(screen.getByText("Error!")).toBeInTheDocument();
    });
  });

  test("renders loading", () => {
    vi.mock("react-query", () => ({
      useQuery: vi.fn().mockReturnValue({
        data: [],
        isLoading: true,
        isError: false,
        error: {},
      }),
    }));

    renderWithProviders(<UserListContainer />);

    waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  });
});
