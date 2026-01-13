import React from "react";
import { Text, Modal, Button, Row, Col } from "../../../tools/desing";
import FormDebt from "./FormDebt";
import TableDebts from "./TableDebts";

interface Props {
  handleOpenModal: (data: any) => void;
  onCloseModal: () => void;
  onFinishForm: (value: any) => void;
  stateOpenModal: boolean;
  stateDataDebt: any;
  loading: boolean;
  dataSource?: any[];
  handlePaymentDebt: (id: string) => void;

}

const Content: React.FC<Props> = ({
  handleOpenModal,
  onCloseModal,
  onFinishForm,
  stateOpenModal,
  stateDataDebt,
  loading,
  dataSource,
  handlePaymentDebt,

}) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Button type="primary" onClick={handleOpenModal}>
          Crear Debt
        </Button>
      </Col>

      <Col xs={24}>
        <TableDebts
          dataSource={dataSource}
          handleOpenModal={handleOpenModal}
          handlePaymentDebt={handlePaymentDebt}
        />
      </Col>

      <Modal
        footer={null}
        title={
          <Text strong>{stateDataDebt?.id ? "Editar Debt" : "Crear Debt"}</Text>
        }
        open={stateOpenModal}
        onCancel={onCloseModal}
        destroyOnHidden
      >
        <FormDebt
          loading={loading}
          onFinish={onFinishForm}
          stateDataDebt={stateDataDebt}
        />
      </Modal>

    </Row>
  );
};

export default Content;
