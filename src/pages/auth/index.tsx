import React from "react";
import Content from "./Content";
import { showError, showAlert } from "../../utils/alert";
import { clienteAxios } from "../../config/clienteAxios";
import { addItemToLocalStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const Auth: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    try {
      const response = await clienteAxios.post("/auth/login", values);

      console.log(response);

      addItemToLocalStorage("user", response.data.users.id);
      addItemToLocalStorage("verified", response.data.users.isActive);
      addItemToLocalStorage("nickName", response.data.users.nickname);

      if (response.data.users.isActive) {
        navigate("/");
      } else {
        showAlert(
          "Usuario pendiente de verificacion",
          "Por favor verifica tu cuenta para continuar",
          "info"
        );
        navigate("/validate-user");
      }
    } catch (error) {
      showError(error);
    }
  };

  return <Content onFinish={onFinish} />;
};

export default Auth;
