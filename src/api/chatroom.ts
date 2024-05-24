import { ChatRoom, User } from "../models/user.ts";
import { API_URL } from "../constants.ts";
import { handleApiResponse } from "./index.ts";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const GET_OPEN_CHAT_ROOM_QUERY = "OPEN_CHATROOMS";

export const getChatRoom = async (chatRoomId: string): Promise<ChatRoom> => {
  const response = await fetch(`${API_URL}/chatroom/${chatRoomId}`);
  return handleApiResponse<ChatRoom>(response);
};

export const useGetOpenChatRooms = (user: User | null) =>
  useQuery({
    queryKey: [GET_OPEN_CHAT_ROOM_QUERY],
    queryFn: async () => {
      if (user) {
        const response = await fetch(`${API_URL}/chatroom/user/${user.id}`);
        return handleApiResponse<ChatRoom[]>(response);
      }
      return [];
    },
    enabled: !!user,
  });

export const usePostChatRoom = () => {
  const queryClient = useQueryClient();

  return useMutation<ChatRoom, unknown, User["id"][]>({
    mutationFn: async (userIds: User["id"][]) => {
      const response = await fetch(`${API_URL}/chatroom/chatroom`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userIds }),
      });

      return handleApiResponse<ChatRoom>(response);
    },
    onSuccess: () => {
      return queryClient.invalidateQueries({
        queryKey: [GET_OPEN_CHAT_ROOM_QUERY],
      });
    },
  });
};

export const postMessage = async ({
  chatRoomId,
  text,
  authorId,
}: {
  chatRoomId: ChatRoom["id"];
  text: string;
  authorId: string;
}): Promise<ChatRoom> => {
  const response = await fetch(`${API_URL}/chatroom/${chatRoomId}/message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text, authorId }),
  });

  return handleApiResponse<ChatRoom>(response);
};
