import { clienteAxios } from "../../config/clienteAxios";
import { showError, showSuccess } from "../../utils/alert";
import { getItemFromLocalStorage } from "../../utils/storage";

export const createDebt = async (value: any) => {
  try {
    const params = {
      ...value,
      createdById: getItemFromLocalStorage("user"),
    };

    await clienteAxios.post("/debts", params);

    showSuccess(
      "Deuda creada exitosamente",
      `Se ha creado la deuda de la descripcion ${value.description}`
    );
  } catch (error) {
    showError(error);
  }
};

export const getDebts = async () => {
  try {
    const response = await clienteAxios.get(
      `/debts?userId=${getItemFromLocalStorage("user")}`
    );
    return response.data;
  } catch (error) {
    showError(error);
  }
};

export const updateDebt = async (id: string, value: any) => {
  try {
    await clienteAxios.patch(`/debts/${id}/paid`, value);
    showSuccess(
      "Deuda actualizada exitosamente",
      `Se ha actualizado la deuda de la descripcion ${value.description}`
    );
  } catch (error) {
    showError(error);
  }
};

export const paymentDebts = async (id: string) => {
  try {
    await clienteAxios.patch(`/debts/${id}/paid`);

    showSuccess(
      "Deuda pagada exitosamente",
      `Se ha marcado la deuda con id ${id} como pagada`
    );
  } catch (error) {
    showError(error);
  }
};
