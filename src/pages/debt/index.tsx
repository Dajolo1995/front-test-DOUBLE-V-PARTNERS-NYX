import React, { useState, useEffect } from "react";
import Content from "./components/Content";

import { createDebt, getDebts, updateDebt, paymentDebts } from "./debt";
import AppLayout from "../../components/Layout";

const Debt: React.FC = () => {
  const [stateOpenModal, setStateOpenModal] = useState(false);
  const [stateDataDebt, setStateDataDebt] = useState({});
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState<any[]>([]);

  const handleOpenModal = (data: any) => {
    setStateOpenModal(true);
    setStateDataDebt(data || {});
  };

  const onCloseModal = async () => {
    setStateOpenModal(false);
    setStateDataDebt({});
    await getDebtsValue();
    setLoading(false);
  };

  const onFinishForm = async (value: any) => {
    if (stateDataDebt?.id) {
      await handleUpdateDebt(value);
    } else {
      await handleCreateDebt(value);
    }
    await onCloseModal();
  };

  const handleCreateDebt = async (value: any) => {
    setLoading(true);
    await createDebt(value);
  };

  const getDebtsValue = async () => {
    const debts = await getDebts();
    setDataSource(debts);
  };

  const handleUpdateDebt = async (value: any) => {
    setLoading(true);
    await updateDebt(stateDataDebt.id, value);
  };

  const handlePaymentDebt = async (id: string) => {
    setLoading(true);
    await paymentDebts(id);
    onCloseModal();
  };

  useEffect(() => {
    getDebtsValue();
  }, []);

  return (
    <AppLayout>
      <Content
        handleOpenModal={handleOpenModal}
        onCloseModal={onCloseModal}
        onFinishForm={onFinishForm}
        stateOpenModal={stateOpenModal}
        stateDataDebt={stateDataDebt}
        loading={loading}
        dataSource={dataSource}
        handlePaymentDebt={handlePaymentDebt}
      />
    </AppLayout>
  );
};

export default Debt;
