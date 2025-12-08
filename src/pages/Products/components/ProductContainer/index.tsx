/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { ProductCard } from "../ProductCard";
import {
  AddRecentInput,
  AddStockInput,
  UpdateProductInput,
} from "../../services/graphql";

export interface IProductContainer {
  categories: any[];
  products: any[];
  isRetailer: boolean;
  updateProduct(args: UpdateProductInput): Promise<boolean>;
  addStock(args: AddStockInput): Promise<boolean>;
  addRecent(args: AddRecentInput): Promise<boolean>;
}

export const ProductContainer = ({
  products,
  categories,
  updateProduct,
  isRetailer,
  addRecent,
  addStock,
}: IProductContainer) => {
  return (
    <S.ProductContainer>
      {products.map((product, id) => (
        <ProductCard
          key={id}
          product={product}
          categories={categories}
          updateProduct={updateProduct}
          addStock={addStock}
          isRetailer={isRetailer}
          addRecent={addRecent}
        />
      ))}
    </S.ProductContainer>
  );
};
