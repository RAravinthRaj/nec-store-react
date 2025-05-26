/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import dotenv from "dotenv";

dotenv.config();

export interface Config {
  nodeEnv: string;

  restBaseURL: string;
  graphqlBaseURL: string;
}

export const config: Config = {
  nodeEnv: process.env.NODE_ENV || "development",
  restBaseURL: process.env.REST_API_URL || "",
  graphqlBaseURL: process.env.GRAPHQL_API_URL || "",
};
