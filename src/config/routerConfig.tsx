import Register from "../pages/register";
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
  ] as DefineRoute[];
};

export default routerConfig;
