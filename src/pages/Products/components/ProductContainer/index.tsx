/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { ProductCard } from "../ProductCard";
import { PRODUCTS_CONFIG } from "../../config";

export interface IProductContainer {}

export const ProductContainer = ({}: IProductContainer) => {
  return (
    <S.ProductContainer>
      {PRODUCTS_CONFIG.products.map((product, id) => (
        <ProductCard key={id} individualProduct={product} />
      ))}
    </S.ProductContainer>
  );
};
