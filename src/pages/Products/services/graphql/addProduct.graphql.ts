/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { ADD_PRODUCT } from "./mutations/addProduct.mutation";

export interface AddProductInput {
  title: string;
  categoryId: string;
  quantity: number;
  price: number;
  productImage?: string;
}

export const addProduct = async (args: AddProductInput) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { title, categoryId, quantity, price, productImage } = args;

      const { data } = await apolloClient.mutate({
        mutation: ADD_PRODUCT,
        variables: {
          title,
          categoryId,
          quantity,
          price,
          productImage,
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
      getGraphqlError(err) || "An error occurred while adding the Product.";

    console.error("Error in addProduct: ", msg);
    throw new Error(msg);
  }
};
