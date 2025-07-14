/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { jwtDecode } from "jwt-decode";
import { ApolloError } from "@apollo/client";
import { ACCESS_CONTROL_MANAGEMENT } from "../config";

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
    return item ? JSON.parse(item) : undefined;
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
    ACCESS_CONTROL_MANAGEMENT.roles[userData?.role].includes(pageName)
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

export const convertFileToBase64 = (
  file: File,
  maxWidth = 150,
  maxHeight = 150,
  quality = 0.3
): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > maxWidth || height > maxHeight) {
          const ratio = width / height;
          if (width > height) {
            width = maxWidth;
            height = Math.round(maxWidth / ratio);
          } else {
            height = maxHeight;
            width = Math.round(maxHeight * ratio);
          }
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) return reject(new Error("Canvas context not available"));
        ctx.drawImage(img, 0, 0, width, height);
        const mime = ["image/png", "image/gif", "image/webp"].includes(
          file.type
        )
          ? file.type
          : "image/jpeg";
        const base64 =
          mime === "image/jpeg"
            ? canvas.toDataURL(mime, quality)
            : canvas.toDataURL(mime);
        resolve(base64);
      };
      if (e.target?.result) img.src = e.target.result as string;
    };

    reader.onerror = () => reject(new Error("Failed to read file"));
    reader.readAsDataURL(file);
  });
