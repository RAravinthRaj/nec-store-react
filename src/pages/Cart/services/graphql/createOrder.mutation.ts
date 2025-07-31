/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { CREATE_ORDER } from "./mutations/createOrder.mutation";

export interface createOrderInput {
  productId: any;
  quantity: number;
}

export const createOrder = async (args: createOrderInput[]) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { data } = await apolloClient.mutate({
        mutation: CREATE_ORDER,
        variables: {
          products: args,
        },
        fetchPolicy: "no-cache",
        context: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      });

      return {
        payload: {
          message: data?.createOrder?.message,
        },
      };
    }

    throw new Error("Unauthorized");
  } catch (err: any) {
    let msg =
      getGraphqlError(err) || "An error occurred while fetching Create Order.";

    console.error("Error in createOrder: ", msg);
    throw new Error(msg);
  }
};
