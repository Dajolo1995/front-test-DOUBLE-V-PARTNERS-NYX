import React from "react";
import {
  Row,
  Col,
  Select,
  Form,
  Button,
  InputNumber,
} from "../../../tools/desing";

const { Option } = Select;

interface Debt {
  id: string;
  description: string;
}

interface Props {
  stateDebts: Debt[];
  onFinish?: (values: { debtId: string }) => void;
  onCloseModal: () => void;
  stateUsers: any;
}

const FormParticipants: React.FC<Props> = ({
  stateDebts,
  onFinish,
  stateUsers,
  onCloseModal,
}) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" onFinish={onFinish}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Form.Item
            label="Deuda"
            name="debtId"
            rules={[{ required: true, message: "Debe seleccionar una deuda" }]}
          >
            <Select placeholder="Seleccionar deuda" allowClear>
              {stateDebts?.map((debt) => (
                <Option key={debt.id} value={debt.id}>
                  {debt.description}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Participante de la deuda"
            name="userId"
            rules={[{ required: true, message: "Debe seleccionar un usuario" }]}
          >
            <Select placeholder="Seleccione un usuario" allowClear>
              {stateUsers?.map((user: any) => (
                <Option key={user.id} value={user.id}>
                  {user.nickname}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Monto de la deuda"
            name="amount"
            rules={[{ required: true, message: "Debe seleccionar un monto" }]}
          >
            <InputNumber
              style={{ width: "100%" }}
              min={1}
              placeholder="Ej: 120000"
              formatter={(value) =>
                `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              }
              parser={(value: any) => Number(value?.replace(/\$\s?|(,*)/g, ""))}
            />
          </Form.Item>
        </Col>

        <Col span={12}>
          <Button style={{ width: "100%" }} type="primary" htmlType="submit">
            Crear Participante
          </Button>
        </Col>
        <Col span={12}>
          <Button
            danger
            type="primary"
            style={{ width: "100%" }}
            onClick={onCloseModal}
          >
            Cancelar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormParticipants;
