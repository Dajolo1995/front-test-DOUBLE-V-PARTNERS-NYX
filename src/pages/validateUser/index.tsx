import React, { useState } from "react";
import {
  OTP,
  Card,
  Row,
  Col,
  Alert,
  Title,
  Text,
  Button,
} from "../../tools/desing";
import { clienteAxios } from "../../config/clienteAxios";
import {
  addItemToLocalStorage,
  getItemFromLocalStorage,
} from "../../utils/storage";
import { showAlert, showError } from "../../utils/alert";
import { useNavigate } from "react-router-dom";

const ValidateUser: React.FC = () => {
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      const params = {
        id: getItemFromLocalStorage("user"),
        code: code.toUpperCase(),
      };

      const response = await clienteAxios.post("auth/validate", params);

      addItemToLocalStorage("verified", response.data.isActive);
      showAlert("Usuario validado", "", "success");
      navigate("/");

    } catch (error) {
      showError(error);
    }
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#f5f7fa" }}
    >
      <Col xs={22} sm={16} md={10} lg={8}>
        <Card
          bordered={false}
          style={{
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <Title level={3} style={{ textAlign: "center" }}>
            Verificación de cuenta
          </Title>

          <Text
            type="secondary"
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Ingresa el código de verificación que enviamos a tu correo
          </Text>

          <Alert
            message="Código de seguridad"
            description="Este código es válido por unos minutos. No lo compartas con nadie."
            type="info"
            showIcon
            style={{ marginBottom: 24 }}
          />

          {/* OTP centrado */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 24,
            }}
          >
            <OTP onChange={setCode} value={code} />
          </div>

          <Button
            type="primary"
            block
            size="large"
            disabled={code.length < 6}
            onClick={onFinish}
          >
            Validar código
          </Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ValidateUser;
