import React from 'react';
import { Layout, Button, Typography, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header, Footer, Content } = Layout;
const { Title, Text } = Typography;

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {

    const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          background: '#fff',
          borderBottom: '1px solid #f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
        }}
      >
        <Title level={4} style={{ margin: 0 }}>
          DebtApp
        </Title>

        <Space>
          <Button onClick={() => navigate("/auth")} type="default">Iniciar sesión</Button>
          <Button onClick={() => navigate("/register")} type="primary">Registrarse</Button>
        </Space>
      </Header>

      <Content style={{ padding: '40px' }}>
        {children}
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          background: '#fafafa',
          borderTop: '1px solid #f0f0f0',
        }}
      >
        <Space direction="vertical" size={4}>
          <Text>© {new Date().getFullYear()} DebtApp</Text>

          <Space>
            <Button type="link">Iniciar sesión</Button>
            <Button type="link">Registrarse</Button>
          </Space>
        </Space>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
