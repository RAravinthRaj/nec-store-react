/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { UPDATE_PRODUCT } from "./mutations/updateProduct.mutation";

export interface UpdateProductInput {
  id: string;
  title?: string;
  categoryId?: string;
  quantity?: number;
  price?: number;
  productImage?: string;
}

export const UpdateProduct = async (args: UpdateProductInput) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { data } = await apolloClient.mutate({
        mutation: UPDATE_PRODUCT,
        variables: {
          input: args,
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
          data: data?.message,
        },
      };
    }

    throw new Error("Unauthorized");
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while updating the Product.";

    console.error("Error in UpdateProduct: ", msg);
    throw new Error(msg);
  }
};
