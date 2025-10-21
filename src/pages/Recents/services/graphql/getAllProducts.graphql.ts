/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { GET_ALL_PRODUCTS } from "./queries/getAllProducts.query";
export interface GetAllProductsInput {
  title?: string;
  categoryId?: string;
  skip?: number;
  limit?: number;
  orderBy?: string;
  productIds?: string[];
  isRecentProduct?: boolean;
}

export const getAllProducts = async (args: GetAllProductsInput) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { data } = await apolloClient.query({
        query: GET_ALL_PRODUCTS,
        variables: args,
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
          products: formatData(data?.getAllProducts?.products),
          totalCount: data?.getAllProducts?.totalCount,
        },
      };
    }

    throw new Error("Unauthorized");
  } catch (err: any) {
    let msg =
      getGraphqlError(err) || "An error occurred while fetching all Products.";

    console.error("Error in getAllProducts: ", msg);
    throw new Error(msg);
  }
};

const formatData = (products: any[]) => {
  let productList: any = [];

  if (products && products.length > 0) {
    for (let product of products) {
      let obj = {
        id: product?.id,
        productImage: product?.productImage,
        title: product?.title,
        category: product?.category?.name,
        quantity: product?.quantity,
        price: product?.price,
      };

      productList.push(obj);
    }
  }

  return productList;
};
