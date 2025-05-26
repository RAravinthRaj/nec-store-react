/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { getUser } from "./graphql";
import { createUser } from "./rest";

class SignUpService {
  private static instance: SignUpService;
  private constructor() {}

  static getInstance() {
    if (!SignUpService.instance) {
      SignUpService.instance = new SignUpService();
    }

    return SignUpService.instance;
  }

  async createUserAPI(args) {
    const data = await createUser(args);
    return data;
  }

  async getUserAPI(args) {
    const data = await getUser(args);
    return data;
  }
}

export default SignUpService.getInstance();
