import React, { useState, useEffect } from "react";
import AppLayout from "../../components/Layout";
import Content from "./content";
import { getDebts } from "../debt/debt";
import { getUsers, createDebt, getParticipantsByDebt, paymentDebts } from "./participants";

const Participants: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [stateOpenModal, setStateOpenModal] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState<any>(null);
  const [stateDebts, setStateDebts] = useState<any[]>([]);
  const [stateUsers, setStateUsers] = useState<any[]>([]);
  const [stateParticipants, setStateParticipants] = useState<any[]>([]);
  const [fullDebts, setFullDebts] = useState<any[]>([]);
  const [stateSelectDebt, setSelectDebt] = useState<string | null>(null);

  const openModal = (data?: any) => {
    setStateOpenModal(true);
    setSelectedParticipant(data || null);
  };

  const onCloseModal = () => {
    setStateOpenModal(false);
    setSelectedParticipant(null);
  };

  // 🔹 Cargar deudas
  const getDebtsData = async () => {
    setLoading(true);

    const response = await getDebts();
    setFullDebts(response)
    const data = response.filter((debt: any) => debt.status !== "PAID");

    setStateDebts(data);
    setSelectDebt(data[0]?.id || null);

    setLoading(false);
  };

  // 🔹 Cargar usuarios
  const getUsersData = async () => {
    const response = await getUsers();
    setStateUsers(response);
  };

  // 🔹 Cargar participantes (DEPENDEN DE selectDebt)
  const getParticipantsDebts = async (debtId: string) => {
    if (!debtId) return;

    const response = await getParticipantsByDebt(debtId);
    setStateParticipants(response);
  };

  // 🔥 Primer render → cargar deudas y usuarios
  useEffect(() => {
    getDebtsData();
    getUsersData();
  }, []);

  // 🔥 Cuando cambia la deuda seleccionada → cargar participantes
  useEffect(() => {
    if (stateSelectDebt) {
      getParticipantsDebts(stateSelectDebt);
    }
  }, [stateSelectDebt]);

  const onFinish = async (value: any) => {
    if (selectedParticipant?.id) {
      alert("se actualiza");
    } else {
      setLoading(true);
      await createDebt(value);
      await getParticipantsDebts(stateSelectDebt!);
      setLoading(false);
    }

    onCloseModal();
  };

  const onPay = async (value: any) => {
    setLoading(true);
    await paymentDebts(value);
    await getParticipantsDebts(selectDebt);
    setLoading(false);
  };
  return (
    <AppLayout>
      <Content
        openModal={openModal}
        loading={loading}
        onCloseModal={onCloseModal}
        stateOpenModal={stateOpenModal}
        selectedParticipant={selectedParticipant}
        stateDebts={stateDebts}
        stateUsers={stateUsers}
        stateParticipants={stateParticipants}
        onFinish={onFinish}
        selectDebt={stateSelectDebt}
        onPay={onPay}
        fullDebts={fullDebts}
        getParticipantsDebts={getParticipantsDebts}
      />
    </AppLayout>
  );
};

export default Participants;
