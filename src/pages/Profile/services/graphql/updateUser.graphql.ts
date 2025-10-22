/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { apolloClient } from "../../../../clients";
import { getGraphqlError, getItemInLocalStorage } from "../../../../utils";
import { UPDATE_USER } from "./mutations/updateUser.mutation";

export interface UpdateUserInput {
  id: string;
  profilePicture?: string | null;
  name?: string | null;
  email?: string | null;
  department?: string | null;
  roles?: string[] | null;
  rollNumber?: string | null;
  status?: string | null;
}

export const updateUser = async (args: UpdateUserInput) => {
  try {
    const token = getItemInLocalStorage("token");
    if (token && token.length > 0) {
      const { data } = await apolloClient.mutate({
        mutation: UPDATE_USER,
        variables: {
          input: {
            ...args,
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
          message: data?.updateUser?.message,
          token: data?.updateUser?.token,
        },
      };
    }

    throw new Error("Unauthorized");
  } catch (err: any) {
    const msg =
      getGraphqlError(err) || "An error occurred while updating the user.";

    console.error("Error in updateUser: ", msg);
    throw new Error(msg);
  }
};
