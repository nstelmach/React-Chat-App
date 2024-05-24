import { User } from "../models/user.ts";
import { API_URL } from "../constants.ts";
import { handleApiResponse } from "./index.ts";
import { useQuery } from "@tanstack/react-query";

export const postRegister = async (data: {
  username: string;
}): Promise<User> => {
  return handleApiResponse<User>(
    await fetch(`${API_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
  );
};

export const postRefresh = async (storedUserId: string): Promise<User> => {
  return handleApiResponse<User>(
    await fetch(`${API_URL}/user/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: storedUserId }),
    }),
  );
};

export const useGetUsers = (refetchInterval: number | false = false) =>
  useQuery<User[]>({
    initialData: [],
    queryKey: ["GET_USERS"],
    queryFn: async () => {
      return handleApiResponse<User[]>(await fetch(`${API_URL}/user/users`));
    },
    refetchInterval: refetchInterval,
  });
