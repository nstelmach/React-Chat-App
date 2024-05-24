export const handleApiResponse = async <T extends object>(
  response: Response,
): Promise<T> => {
  const data = await response.json();

  if (response.status >= 400 && response.status < 500) {
    throw data;
  } else if (response.status >= 500) {
    throw { status: 500, message: "Server error" };
  }

  return data;
};
