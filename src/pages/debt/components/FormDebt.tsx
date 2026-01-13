import React from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Item,
  Row,
  Col,
  Select,
  Option,
} from "../../../tools/desing";

interface CreateDebtFormValues {
  description: string;
  totalAmount: number;
}

interface Props {
  onFinish: (values: CreateDebtFormValues) => void;
  loading: boolean;
  onCancel?: () => void;
  stateDataDebt: any;
}

const FormDebt: React.FC<Props> = ({
  onFinish,
  loading,
  onCancel,
  stateDataDebt,
}) => {
  const [form] = Form.useForm<CreateDebtFormValues>();

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={stateDataDebt}
    >
      {/* DESCRIPCIÓN */}
      <Item
        label="Descripción"
        name="description"
        rules={[
          { required: true, message: "La descripción es obligatoria" },
          { min: 3, message: "Mínimo 3 caracteres" },
        ]}
      >
        <Input placeholder="Ej: Cena viernes" />
      </Item>

      {/* MONTO */}
      <Item
        label="Monto total"
        name="totalAmount"
        rules={[{ required: true, message: "El monto es obligatorio" }]}
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
      </Item>


      {/* BOTONES */}
      <Row gutter={[8, 8]}>
        <Col span={12}>
          <Button style={{ width: "100%" }} onClick={onCancel}>
            Cancelar
          </Button>
        </Col>

        <Col span={12}>
          <Button
            style={{ width: "100%" }}
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            {stateDataDebt?.id ? "Actualizar deuda" : "Crear deuda"}
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormDebt;
