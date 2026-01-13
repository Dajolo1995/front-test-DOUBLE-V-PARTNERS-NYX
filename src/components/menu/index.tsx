import React from "react";
import routerConfig from "../../config/routerConfig";
import { Menu } from "../../tools/desing";
import { useLocation, useNavigate } from "react-router-dom";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem => ({
  key,
  icon,
  children,
  label,
});

const MenuApp: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const items: MenuItem[] = routerConfig()
    .filter((route) => route.menu)
    .map((route) =>
      getItem(route.name, route.Path!, route.icon)
    );

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={[location.pathname]}
      onClick={({ key }) => navigate(key)}
      items={items}
    />
  );
};

export default MenuApp;
