/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { gql } from "@apollo/client";

export const CREATE_ORDER = gql`
  mutation Mutation($products: [OrderProductInput!]!) {
    createOrder(products: $products) {
      message
      order {
        id
        orderBy {
          id
          name
          profilePicture
          roles
          rollNumber
          status
          updatedAt
          email
          department
          createdAt
        }
        orderId
        orderStatus
        paidStatus
        products {
          id
          price
          productImage
          quantity
          title
          updatedAt
          createdAt
          category {
            createdAt
            id
            name
            updatedAt
          }
        }
        totalAmount
        updatedAt
        createdAt
        deliveryStatus
      }
    }
  }
`;
