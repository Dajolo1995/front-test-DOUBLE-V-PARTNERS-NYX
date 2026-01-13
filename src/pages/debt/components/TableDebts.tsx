import React from "react";
import {
  Button,
  Col,
  Row,
  Table,
  Text,
  Tag,
  Tooltip,
} from "../../../tools/desing";
import {
  EditOutlined,
  CheckCircleOutlined,

} from "../../../tools/icon";
import dayjs from "dayjs";
import { formatNumberText } from "../../../utils/formatNumber";

interface Debt {
  id: string;
  description: string;
  totalAmount: number;
  status: "PENDING" | "PAID" | "OVERDUE";
  createdAt: string;
  updatedAt: string;
}

interface Props {
  dataSource?: Debt[];
  handleOpenModal?: (data: Debt) => void;
  handlePaymentDebt?: (id: string) => void;

}

const STATUS_CONFIG = {
  PENDING: { label: "Pendiente", color: "orange" },
  PAID: { label: "Pagado", color: "green" },
  OVERDUE: { label: "Vencido", color: "red" },
};

const TableDebts: React.FC<Props> = ({
  dataSource,
  handleOpenModal,
  handlePaymentDebt,
}) => {
  return (
    <Table<Debt>
      rowKey="id"
      dataSource={dataSource}
      pagination={{ pageSize: 10 }}
      columns={[
        {
          title: "Id de la deuda",
          dataIndex: "id",
        },
        {
          title: "Descripción",
          dataIndex: "description",
          ellipsis: true,
        },
        {
          title: "Monto",
          dataIndex: "totalAmount",
          align: "right",
          render: (value: number) => (
            <Text strong>{formatNumberText(value)}</Text>
          ),
        },
        {
          title: "Estado",
          dataIndex: "status",
          align: "center",
          render: (status: Debt["status"]) => {
            const config = STATUS_CONFIG[status];
            return <Tag color={config.color}>{config.label}</Tag>;
          },
        },
        {
          title: "Creado",
          dataIndex: "createdAt",
          align: "center",
          render: (date: string) => (
            <Text>{dayjs(date).format("DD/MM/YYYY")}</Text>
          ),
        },
        {
          title: "Actualizado",
          dataIndex: "updatedAt",
          align: "center",
          render: (date: string) => (
            <Text>{dayjs(date).format("DD/MM/YYYY")}</Text>
          ),
        },
        {
          title: "Acciones",
          key: "actions",
          align: "center",
          render: (_, record) => {
            const canEdit = record.status !== "PAID";

            return (
              <Row justify="center" gutter={12}>
                {canEdit && (
                  <>
                    <Col>
                      <Tooltip title="Editar deuda">
                        <Button
                          type="text"
                          icon={<EditOutlined />}
                          onClick={() => handleOpenModal?.(record)}
                        />
                      </Tooltip>
                    </Col>

                    <Col>
                      <Tooltip title="Marcar como pagada">
                        <Button
                          type="text"
                          icon={<CheckCircleOutlined />}
                          onClick={() => handlePaymentDebt?.(record.id)}
                        />
                      </Tooltip>
                    </Col>
                  </>
                )}
              </Row>
            );
          },
        },
      ]}
    />
  );
};

export default TableDebts;
