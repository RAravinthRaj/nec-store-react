/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { ProductCard } from "../ProductCard";
import { UpdateProductInput } from "../../services/graphql";

export interface IProductContainer {
  categories: any[];
  products: any[];
  isRetailer: boolean;
  updateProduct(args: UpdateProductInput): Promise<boolean>;
}

export const ProductContainer = ({
  products,
  categories,
  updateProduct,
  isRetailer,
}: IProductContainer) => {
  return (
    <S.ProductContainer>
      {products
        .filter((product) => product?.quantity > 0)
        .map((product, id) => (
          <ProductCard
            key={id}
            product={product}
            categories={categories}
            updateProduct={updateProduct}
            isRetailer={isRetailer}
          />
        ))}
    </S.ProductContainer>
  );
};
