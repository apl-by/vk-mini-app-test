import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  ScreenSpinner,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
  WebviewType,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import User from "./panels/User/User";
import Friends from "./panels/Friends/Friends";
import store from "./store/store";

const App = () => {
  const [activePanel, setActivePanel] = useState("user");
  const [popout, setPopout] = useState<JSX.Element | null>(
    <ScreenSpinner size="large" />
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const user = await bridge.send("VKWebAppGetUserInfo");
        store.setUser(user);
        setPopout(null);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const go = (e: React.SyntheticEvent<HTMLElement>) => {
    if (e.currentTarget?.dataset?.to) {
      setActivePanel(e.currentTarget.dataset.to);
    }
  };

  return (
    <ConfigProvider appearance="light" webviewType={WebviewType.INTERNAL}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout popout={popout}>
            <SplitCol>
              <View activePanel={activePanel}>
                <User id="user" go={go} />
                <Friends id="friends" go={go} />
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
