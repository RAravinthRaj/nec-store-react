/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { getAllCategories } from "./graphql";

class ProductsService {
  private static instance: ProductsService;

  private constructor() {}

  static getInstance(): ProductsService {
    if (!ProductsService.instance) {
      ProductsService.instance = new ProductsService();
    }
    return ProductsService.instance;
  }

  async getAllCategoriesAPI(): Promise<any> {
    const res = await getAllCategories();
    return res;
  }
}

export default ProductsService.getInstance();
