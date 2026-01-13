import React from "react";
import {
  Text,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Select,
  Option,
  Item,
} from "../../../tools/desing";
import FormParticipants from "./FormParticipants";
import DebtParticipantsTable from "./TableParticipants";

interface Props {
  openModal: (data?: any) => void;
  loading: boolean;
  onCloseModal: () => void;
  stateOpenModal: boolean;
  selectedParticipant: any;
  stateDebts: any;
  onFinish?: any;
  stateUsers: any;
  stateParticipants: any;
  selectDebt: any;
  onPay?: (data: any) => void;
  fullDebts: any;
  getParticipantsDebts: any
}

const Content: React.FC<Props> = ({
  openModal,
  loading,
  onCloseModal,
  stateOpenModal,
  selectedParticipant,
  stateDebts,
  onFinish,
  stateUsers,
  stateParticipants,
  selectDebt,
  fullDebts,
  onPay,
  getParticipantsDebts
}) => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={8}>
        <Select value={selectDebt} style={{ width: "100%" }} onChange={(value) => getParticipantsDebts(value)}>
          {fullDebts.map((debt: any) => (
            <Option key={debt.id} value={debt.id}>
              {debt.description}
            </Option>
          ))}
        </Select>
      </Col>

      <Col xs={8}>
        <Button type="primary" onClick={openModal} loading={loading}>
          Añadir participantes
        </Button>
      </Col>

      <Col xs={24}>
        {stateParticipants.length === 0 ? (
          <Text>No se ha añadido participante a esta deuda</Text>
        ) : (
          <DebtParticipantsTable data={stateParticipants} onPay={onPay} />
        )}
      </Col>

      <Modal
        footer={null}
        open={stateOpenModal}
        onCancel={onCloseModal}
        title="Añadir Participante"
      >
        <FormParticipants
          stateDebts={stateDebts}
          onFinish={onFinish}
          stateUsers={stateUsers}
        />
      </Modal>
    </Row>
  );
};

export default Content;
