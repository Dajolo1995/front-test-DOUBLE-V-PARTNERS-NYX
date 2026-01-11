import React from "react";
import Content from "./component/Content";
import { showAlert } from "../../utils/alert";
import { clienteAxios } from "../../config/clienteAxios";
import { addItemToLocalStorage } from "../../utils/storage";

const Register: React.FC = () => {
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
    } catch (error: any) {
      console.log(error);
      showAlert(
        "Error",
        error?.response?.data?.message || error.message,
        "error"
      );
    }
  };

  return (
    <>
      <Content handleFinish={handleFinish} />
    </>
  );
};

export default Register;
