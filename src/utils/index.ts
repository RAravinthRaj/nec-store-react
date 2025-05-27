/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { jwtDecode } from "jwt-decode";
import { ApolloError } from "@apollo/client";
import { SIDE_DRAWER_ROLE_MANAGEMENT } from "../config";

export const getGraphqlError = (err: any): string => {
  let msg = "";

  if (err instanceof ApolloError) {
    if (err.graphQLErrors?.length > 0) {
      msg = err.graphQLErrors[0].message;
    } else if (err.networkError) {
      const networkErr: any = err.networkError;

      if (networkErr.result?.errors?.length > 0) {
        msg = networkErr.result.errors[0].message;
      } else if (networkErr.bodyText) {
        try {
          const parsed = JSON.parse(networkErr.bodyText);
          if (parsed.errors?.length > 0) {
            msg = parsed.errors[0].message;
          }
        } catch (_) {
          msg = networkErr.message;
        }
      } else {
        msg = networkErr.message;
      }
    }
  } else if (err?.message) {
    msg = err.message;
  }

  return msg;
};

export const setItemInLocalStorage = (key: string, value: any): void => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  } catch (err) {
    console.error(`Error setting item in localStorage with key "${key}":`, err);
    throw err;
  }
};

export const getItemInLocalStorage = (key: string): any => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  } catch (err) {
    console.error(
      `Error getting or parsing item from localStorage with key "${key}":`,
      err
    );
    throw err;
  }
};

export const checkAccessControl = (pageName: string): boolean => {
  const userData = getUserDetails();

  return (
    userData?.role &&
    userData?.role.length > 0 &&
    SIDE_DRAWER_ROLE_MANAGEMENT.roles[userData?.role].includes(pageName)
  );
};

export const getUserDetails = (): any => {
  const token = getItemInLocalStorage("token");
  let userData = null;

  try {
    if (token && token.length > 0) {
      userData = jwtDecode(token);
    }
    return userData;
  } catch (err) {
    console.error(`Error in decoding token : "${err}"`);
    throw err;
  }
};
