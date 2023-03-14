import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Avatar,
  SimpleCell,
  Spacing,
} from "@vkontakte/vkui";
import { observer } from "mobx-react-lite";
import store from "../../store/store";

interface UserProps {
  id: "user";
  go: (e: React.SyntheticEvent<HTMLElement>) => void;
}

const User = observer(({ id, go }: UserProps) => {
  const user = store.user;

  return (
    <Panel id={id}>
      <PanelHeader>{"Информация о пользователе"}</PanelHeader>
      {user && (
        <Group>
          <div style={{ width: "max-content", paddingLeft: "10px" }}>
            <Header mode="secondary">{"Пользователь"}</Header>
            <SimpleCell before={<Avatar size={40} src={user.photo_100} />}>
              {`${user.first_name} ${user.last_name}`}
            </SimpleCell>
            <Spacing size={16} />
            <Button
              size="l"
              mode="primary"
              onClick={go}
              stretched
              data-to={"friends"}
            >
              {"Друзья"}
            </Button>
          </div>
        </Group>
      )}
    </Panel>
  );
});

export default User;
