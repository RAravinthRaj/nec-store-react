/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
export interface Config {
  nodeEnv: string;

  restBaseURL: string;
  graphqlBaseURL: string;
}

export const config: Config = {
  nodeEnv: import.meta.env.NODE_ENV || "development",
  restBaseURL: import.meta.env.REST_API_URL || "",
  graphqlBaseURL: import.meta.env.GRAPHQL_API_URL || "",
};
