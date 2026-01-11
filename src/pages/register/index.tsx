import React from "react";
import Content from "./component/Content";
import { showAlert, showError } from "../../utils/alert";
import { clienteAxios } from "../../config/clienteAxios";
import { addItemToLocalStorage } from "../../utils/storage";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const navigate = useNavigate();

  const handleFinish = async (values: any) => {
    try {
      const response = await clienteAxios.post("auth/register", values);

      showAlert(
        "Registro exitoso",
        "Se ha enviado un correo electronico para que pueda verificar su cuenta",
        "success"
      );

      addItemToLocalStorage("user", response.data.user.id);
      addItemToLocalStorage("verified", response.data.user.isActive);
      navigate("/validate-user");
    } catch (error: any) {
      showError(error);
    }
  };

  return <Content handleFinish={handleFinish} />;
};

export default Register;
