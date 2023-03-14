import { FriendData } from "../types/types";

export const handleFriends = (
  friends: Array<{ [k: string]: any }>
): FriendData[] => {
  return friends.map((i) => ({
    first_name: i?.first_name ?? "",
    last_name: i?.last_name ?? "",
    photo_100: i?.photo_100 ?? "",
    id: i?.id ?? "",
  }));
};
