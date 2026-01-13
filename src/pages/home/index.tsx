import React from "react";
import { Row, Col, Typography, Button, Card } from "antd";
import MainLayout from "../../components/Layout/MainLayout";

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <MainLayout>
      <Row justify="center" style={{ marginBottom: 80 }}>
        <Col xs={24} md={16} style={{ textAlign: "center" }}>
          <Title>Gestiona tus deudas de forma simple y segura</Title>

          <Paragraph style={{ fontSize: 16 }}>
            Registra deudas, agrega participantes y controla pagos fácilmente
            desde una sola plataforma.
          </Paragraph>

          <Button type="primary" size="large">
            Crear cuenta gratis
          </Button>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={8}>
          <Card title="📌 Registro de deudas" bordered={false}>
            <Paragraph>
              Crea deudas de manera clara y define montos exactos para cada
              caso.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="🤝 Participantes" bordered={false}>
            <Paragraph>
              Agrega participantes y divide la deuda de forma transparente y
              justa.
            </Paragraph>
          </Card>
        </Col>

        <Col xs={24} md={8}>
          <Card title="✅ Control de pagos" bordered={false}>
            <Paragraph>
              Marca pagos individuales y cierra automáticamente la deuda cuando
              todos paguen.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 80 }}>
        <Col xs={24} md={16} style={{ textAlign: "center" }}>
          <Title level={3}>¿Listo para empezar?</Title>

          <Paragraph>
            Crea tu cuenta y comienza a gestionar tus deudas hoy mismo.
          </Paragraph>

          <Button type="primary" size="large">
            Registrarse
          </Button>
        </Col>
      </Row>
    </MainLayout>
  );
};

export default Home;
