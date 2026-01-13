import React from "react";
import { Table, Button, Tag, Space, Text } from "../../../tools/desing";

export interface DebtParticipant {
  id: string;
  userId: string;
  debtId: string;
  amount: string;
  status: "PENDING" | "PAID";
  paidAt: string | null;
  user: {
    id: string;
    email: string;
    nickname: string;
    name: string;
    lastName: string;
  };
}

interface Props {
  data: DebtParticipant[];
  onPay?: (participant: DebtParticipant) => void;
}

const DebtParticipantsTable: React.FC<Props> = ({
  data,
  onPay,
}) => {
  return (
    <Table
      rowKey="id"
      dataSource={data}
      pagination={false}
      columns={[
        {
          title: "Usuario",
          render: (_, record) => (
            <Text>
              {record.user.name} {record.user.lastName}
              <br />
              <Text type="secondary">{record.user.email}</Text>
            </Text>
          ),
        },
        {
          title: "Monto",
          dataIndex: "amount",
          render: (amount) => (
            <Text strong>${Number(amount).toLocaleString()}</Text>
          ),
        },
        {
          title: "Estado",
          dataIndex: "status",
          render: (status) =>
            status === "PAID" ? (
              <Tag color="green">Pagado</Tag>
            ) : (
              <Tag color="orange">Pendiente</Tag>
            ),
        },
        {
          title: "Acciones",
          render: (_, record) => (
            <Space>
              <Button
                type="primary"
                size="small"
                danger={record.status === "PENDING"}
                disabled={record.status === "PAID"}
                onClick={() => onPay(record)}
              >
                Marcar pagado
              </Button>
            </Space>
          ),
        },
      ]}
    />
  );
};

export default DebtParticipantsTable;
