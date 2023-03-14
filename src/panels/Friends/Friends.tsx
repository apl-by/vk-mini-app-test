import {
  Avatar,
  Group,
  Header,
  Panel,
  PanelHeader,
  PanelHeaderBack,
  SimpleCell,
  Spacing,
} from "@vkontakte/vkui";
import { useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import { handleFriends } from "../../utils/utils";

interface FriendsProps {
  id: "friends";
  go: (e: React.SyntheticEvent<HTMLElement>) => void;
}

const Friends = observer(({ id, go }: FriendsProps) => {
  const friends = store.friends;

  useEffect(() => {
    async function fetchData() {
      try {
        const param = await bridge.send("VKWebAppGetLaunchParams");

        const data = await bridge.send("VKWebAppGetAuthToken", {
          app_id: param.vk_app_id,
          scope: "friends",
        });

        const friendsData: any = await bridge.send("VKWebAppCallAPIMethod", {
          method: "friends.get",
          params: {
            fields: "nickname, photo_100",
            v: "5.131",
            access_token: data.access_token,
          },
        });

        store.setFriends(handleFriends(friendsData.response.items));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  const jsxFriendsList =
    friends && friends.length > 0 ? (
      friends.map((i) => (
        <div key={i.id}>
          <SimpleCell before={<Avatar size={40} src={i.photo_100} />}>
            {`${i.first_name} ${i.last_name}`}
          </SimpleCell>
          <Spacing size={10} />
        </div>
      ))
    ) : (
      <SimpleCell>Друзей пока нет...</SimpleCell>
    );

  return (
    <Panel id={id}>
      <PanelHeader before={<PanelHeaderBack onClick={go} data-to="user" />}>
        {"Список друзей"}
      </PanelHeader>
      {friends && (
        <Group>
          <Header mode="secondary">{"Друзья"}</Header>
          {jsxFriendsList}
        </Group>
      )}
    </Panel>
  );
});

export default Friends;
