/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { useState } from "react";
import { useTheme } from "../../../../hooks";
import * as S from "./styles";
import { EditItemModal } from "../EditItem";
import { toast } from "react-toastify";
import { PRODUCTS_CONFIG } from "../../config";
import { UpdateProductInput } from "../../services/graphql";
export interface IProductCard {
  product: any;
  categories: any[];
  updateProduct(args: UpdateProductInput): Promise<boolean>;
  isRetailer: boolean;
}

export const ProductCard = ({
  product,
  categories,
  updateProduct,
  isRetailer,
}: IProductCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  const itemAdded = () => {
    toast.success(PRODUCTS_CONFIG.addItem);
  };

  const _renderCardInitialDetails = () => {
    return (
      <S.ProductDetailContainer>
        <S.ImageContainer>
          <S.Image
            src={product.productImage ?? theme.images.defaultProductImage}
          />
        </S.ImageContainer>
        <div>
          <S.TitleContainer>{product?.title}</S.TitleContainer>
          <S.CategoryContainer $bgColor={theme.colors.primary}>
            {product?.category}
          </S.CategoryContainer>
          <S.ProductDes>
            <S.QuantityContainer>
              {PRODUCTS_CONFIG.prQuantity}
              {product?.quantity}
            </S.QuantityContainer>
            <S.RupeeContainer>
              {PRODUCTS_CONFIG.prMrp} {product?.price}
            </S.RupeeContainer>
          </S.ProductDes>
        </div>
      </S.ProductDetailContainer>
    );
  };

  const _renderButton = () => {
    if (isRetailer) {
      return (
        <S.ButtonContainer>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => setModal(true)}
          >
            <S.EditIcon />
            {PRODUCTS_CONFIG.editButton}
          </S.Button>
        </S.ButtonContainer>
      );
    }

    return (
      <S.ButtonContainer>
        <S.Button
          $bgColor={theme.colors.primary}
          onClick={() => {
            itemAdded();
          }}
        >
          <S.CartIcon />
          {PRODUCTS_CONFIG.addToCartButton}
        </S.Button>
      </S.ButtonContainer>
    );
  };

  return (
    <div>
      <S.CardContainer>
        {_renderCardInitialDetails()}
        {_renderButton()}
      </S.CardContainer>
      <EditItemModal
        modalShow={modal}
        onClose={() => setModal(false)}
        product={product}
        categories={categories}
        updateProduct={updateProduct}
      />
    </div>
  );
};
