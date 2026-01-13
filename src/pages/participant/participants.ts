import { clienteAxios } from "../../config/clienteAxios";
import { showError, showSuccess } from "../../utils/alert";
import { getItemFromLocalStorage } from "../../utils/storage";

export const getUsers = async () => {
  try {
    const response = await clienteAxios.get(
      `users?excludeId=${getItemFromLocalStorage("user")}`
    );
    return response.data;
  } catch (error) {
    showError(error);
  }
};

export const createDebt = async (data: any) => {
  try {
    await clienteAxios.post(`debts/${data.debtId}/participants`, {
      userId: data.userId,
      amount: data.amount,
    });

    showSuccess(
      "Participante creado correctamente",
      "Se ha creado un nuevo participante en la deuda"
    );
  } catch (error) {
    showError(error);
  }
};

export const getParticipantsByDebt = async (debtId: string) => {
  try {
    const response = await clienteAxios.get(`debts/${debtId}/participants`);
    return response.data;
  } catch (error) {
    showError(error);
  }
};

export const paymentDebts = async (data: any) => {
  try {
    await clienteAxios.patch(
      `debts/${data.debtId}/participants/${data.userId}/pay`
    );
    showSuccess(
      "Pago realizado correctamente",
      "Se ha realizado el pago de la deuda"
    );
  } catch (error) {
    showError(error);
  }
};
