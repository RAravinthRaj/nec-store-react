/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { ADD_STOCK } from "./mutations/addStock.mutation";

export interface AddStockInput {
  id: string;
  quantity: number;
  price: number;
}

export const addStock = async (args: AddStockInput) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { id, quantity, price } = args;

      const { data } = await apolloClient.mutate({
        mutation: ADD_STOCK,
        variables: {
          input: {
            id,
            quantity,
            price,
          },
        },
        context: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      });

      return {
        payload: {
          data: data?.addProduct,
        },
      };
    }

    throw new Error("Unauthorized");
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while adding the Stock.";

    console.error("Error in addStock: ", msg);
    throw new Error(msg);
  }
};
