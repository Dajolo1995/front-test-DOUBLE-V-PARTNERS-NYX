import React, { useState } from "react";

import {
  Layout,
  Sider,
  Header,
  Content,
  Footer,
  Dropdown,
  Space,
} from "../../tools/desing";
import MenuApp from "../menu";
import type { MenuProps } from "antd";
import { getItemFromLocalStorage, removeItemFromLocalStorage } from "../../utils/storage";
import { DownOutlined } from "../../tools/icon";
import { useNavigate } from "react-router-dom";
interface AppProps {
  children: React.ReactNode;
}

const App: React.FC<AppProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "salir",
      onClick: () => {
        removeItemFromLocalStorage()
        navigate("/");
      },
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <MenuApp />
      </Sider>
      <Layout>
        <Header style={{ display: "flex", justifyContent: "end" }}>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space style={{ color: "#fff" }}>
                {getItemFromLocalStorage("nickName").toUpperCase()}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content style={{ padding: "24px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
