/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { GET_ALL_RECENT_PRODUCTS } from "./queries/getAllRecentProducts.query";

export const getAllRecentProducts = async (userId: string) => {
  try {
    const token = getItemInLocalStorage("token");
    if (!token || token.length === 0) throw new Error("Unauthorized");

    const { data } = await apolloClient.query<{
      getAllRecentProducts: string[];
    }>({
      query: GET_ALL_RECENT_PRODUCTS,
      variables: { userId },
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
        recentProductIds: data.getAllRecentProducts,
      },
    };
  } catch (err: any) {
    const msg =
      getGraphqlError(err) ||
      "An error occurred while fetching recent products.";
    console.error("Error in getAllRecentProducts: ", msg);
    throw new Error(msg);
  }
};
