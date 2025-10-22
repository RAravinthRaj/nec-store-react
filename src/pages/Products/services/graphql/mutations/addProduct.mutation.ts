/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const ADD_PRODUCT = gql`
  mutation Mutation(
    $title: String!
    $categoryId: ID!
    $quantity: Int!
    $price: Float!
    $productImage: String
  ) {
    addProduct(
      title: $title
      categoryId: $categoryId
      quantity: $quantity
      price: $price
      productImage: $productImage
    ) {
      id
      price
      productImage
      quantity
      title
      updatedAt
      createdAt
      category {
        id
        name
      }
    }
  }
`;
