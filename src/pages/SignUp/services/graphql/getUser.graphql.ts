/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { GET_USER } from "./queries/getUser.query";

export const getUser = async (userId: string) => {
  try {
    const { data } = await apolloClient.mutate({
      mutation: GET_USER,
      variables: { id: userId },
    });

    return data.user;
  } catch (err: any) {
    console.error("Error in getUser: ", err);
    throw err;
  }
};
