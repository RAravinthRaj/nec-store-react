/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import axios from "axios";
import { config } from "../../../../config";

export const createUser = async (userId: string) => {
  try {
    const res = await axios.get(`${config.restBaseURL}/signup`, {
      params: {
        userId,
      },
    });

    return formatData(res.data);
  } catch (err: any) {
    console.error("Error in getUser: ", err);
    throw err;
  }
};

const formatData = (data: any) => {
  return data.map((item: any) => ({
    id: item.id,
    name: item.name,
  }));
};
