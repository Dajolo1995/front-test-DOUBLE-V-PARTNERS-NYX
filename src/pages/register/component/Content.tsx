import React from "react";

import {
  Card,
  Col,
  Item,
  Row,
  Title,
  Text,
  Form,
  Input,
  Button,
  Password,
} from "../../../tools/desing";

interface Props {
  handleFinish: (values: any) => void;
}

const Content: React.FC<Props> = ({ handleFinish }) => {
  return (
    <Row
      justify="center"
      align="middle"
      style={{ minHeight: "100vh", background: "#f5f7fa" }}
    >
      <Col xs={22} sm={16} md={10} lg={8}>
        <Card bordered={false} style={{ borderRadius: 12 }}>
          <Title level={3} style={{ textAlign: "center" }}>
            Crear cuenta
          </Title>
          <Text
            type="secondary"
            style={{ display: "block", textAlign: "center", marginBottom: 24 }}
          >
            Regístrate para gestionar tus deudas
          </Text>

          <Form layout="vertical" onFinish={handleFinish}>
            <Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: "El email es obligatorio" },
                { type: "email", message: "Email inválido" },
              ]}
            >
              <Input placeholder="ejemplo@email.com" />
            </Item>

            <Item
              name="password"
              label="Contraseña"
              rules={[
                { required: true, message: "La contraseña es obligatoria" },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/,
                  message:
                    "Debe tener mayúscula, minúscula, número y carácter especial",
                },
              ]}
            >
              <Password placeholder="********" autoComplete="new-password" />
            </Item>

            <Item
              name="nickname"
              label="Nickname"
              rules={[{ required: true, message: "Nickname obligatorio" }]}
            >
              <Input placeholder="Agregue su NickName" />
            </Item>

            <Item
              name="name"
              label="Nombre"
              rules={[{ required: true, message: "Nombre obligatorio" }]}
            >
              <Input placeholder="Daniel" />
            </Item>

            <Item
              name="lastName"
              label="Apellido"
              rules={[{ required: true, message: "Apellido obligatorio" }]}
            >
              <Input placeholder="Jose" />
            </Item>

            <Item
              name="phone"
              label="Teléfono"
              rules={[
                {
                  pattern: /^[0-9]{7,10}$/,
                  message: "Número inválido",
                },
              ]}
            >
              <Input placeholder="3006860267" />
            </Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              style={{ marginTop: 12 }}
            >
              Registrarme
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default Content;
