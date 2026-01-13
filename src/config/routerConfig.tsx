import Register from "../pages/register";
import Auth from "../pages/auth";
import ValidateUser from "../pages/validateUser";
import Debt from "../pages/debt";
import type { DefineRoute } from "../interface/router";
import Participants from "../pages/participant";
import { DollarOutlined, UsergroupAddOutlined } from "../tools/icon";

const routerConfig = () => {
  return [
    {
      Path: "/register",
      Element: Register,
      menu: false,
      name: "Registro",
      private: false,
    },
    {
      Path: "/auth",
      Element: Auth,
      menu: false,
      name: "Autenticación",
      private: false,
    },
    {
      Path: "/validate-user",
      Element: ValidateUser,
      menu: false,
      name: "Validar Usuario",
      private: false,
    },
    {
      Path: "/",
      Element: Debt,
      menu: true,
      name: "Deuda",
      private: false,
      icon: <DollarOutlined />,
    },
    {
      Path: "/participants",
      Element: Participants,
      menu: true,
      name: "Participantes",
      private: false,
      icon: <UsergroupAddOutlined />,
    },
  ] as DefineRoute[];
};

export default routerConfig;
