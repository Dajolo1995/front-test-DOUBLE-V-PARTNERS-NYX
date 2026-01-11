import { useMutation } from "@apollo/client/react";

import { CreateDebtDocument } from "../graphql/graphql";

export const useCreateDebt = () => {
  useMutation(CreateDebtDocument);
};
