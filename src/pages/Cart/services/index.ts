/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { GetAllProductsInput, getAllProducts } from "./graphql";

class CartsService {
  private static instance: CartsService;

  private constructor() {}

  static getInstance(): CartsService {
    if (!CartsService.instance) {
      CartsService.instance = new CartsService();
    }
    return CartsService.instance;
  }

  async getAllProductsAPI(args: GetAllProductsInput): Promise<any> {
    const res = await getAllProducts(args);
    return res;
  }
}

export default CartsService.getInstance();
