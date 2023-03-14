import { UserInfo } from "@vkontakte/vk-bridge";
import { makeAutoObservable } from "mobx";
import { FriendData } from "../types/types";

class Store {
  user: UserInfo | null = null;
  friends: FriendData[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user: UserInfo) {
    this.user = user;
  }

  setFriends(friends: FriendData[]) {
    this.friends = friends;
  }
}

export default new Store();
