/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { CANCEL_ORDER } from "./mutations/cancelOrder.mutation";

export const cancelOrder = async (orderId: string) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { data } = await apolloClient.mutate({
        mutation: CANCEL_ORDER,
        variables: {
          orderId,
        },
        context: {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      });

      return {
        data: data?.cancelOrder?.message,
      };
    }

    throw new Error("Unauthorized");
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while Canceling the Order.";

    console.error("Error in cancelOrder: ", msg);
    throw new Error(msg);
  }
};
