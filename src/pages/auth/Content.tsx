import React from 'react'
import { Card, Col, Password, Row, Title, Text, Form, Item, Input, Button } from '../../tools/desing'

interface Props {
    onFinish: (values: any) => void
}

const Content: React.FC<Props> = ({onFinish}) => {
  return (
  <Row
      justify="center"
      align="middle"
      style={{ minHeight: '100vh', background: '#f5f7fa' }}
    >
      <Col xs={22} sm={16} md={10} lg={8}>
        <Card
          bordered={false}
          style={{
            borderRadius: 12,
            boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
          }}
        >
          <Title level={3} style={{ textAlign: 'center' }}>
            Iniciar sesión
          </Title>

          <Text
            type="secondary"
            style={{
              display: 'block',
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            Ingresa con tu email o nickname
          </Text>

          <Form layout="vertical" onFinish={onFinish}>
            <Item
              name="user"
              label="Email o Nickname"
              rules={[
                {
                  required: true,
                  message: 'Ingresa tu email o nickname',
                },
              ]}
            >
              <Input
                placeholder="email@dominio.com o danilobo"
                autoComplete="username"
              />
            </Item>

            <Item
              name="password"
              label="Contraseña"
              rules={[
                {
                  required: true,
                  message: 'La contraseña es obligatoria',
                },
              ]}
            >
              <Password
                placeholder="********"
                autoComplete="current-password"
              />
            </Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
            >
              Ingresar
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}

export default Content