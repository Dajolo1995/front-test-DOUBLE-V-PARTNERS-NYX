import Register from "../pages/register";
import Auth from "../pages/auth";
import ValidateUser from "../pages/validateUser";
import type { DefineRoute } from "../interface/router";

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
  ] as DefineRoute[];
};

export default routerConfig;
