import Swal from "sweetalert2";

export const showAlert = (
  title: string,
  text: string,
  icon: "success" | "error" | "warning" | "info"
) => {
  Swal.fire({
    title,
    text,
    icon,
  });
};

export const showError = (error: any) => {
  showAlert("Error", error?.response?.data?.message || error.message, "error");
};

export const showSuccess = (title: string, text?: string) => {
  return Swal.fire({
    title,
    text,
    icon: "success",
  });
};
