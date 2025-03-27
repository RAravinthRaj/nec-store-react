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

export interface IProductCard {
  individualProduct: {
    Title: string;
    Category: string;
    Quantity: number;
    MRP: number;
  };
}

export const ProductCard = ({ individualProduct }: IProductCard) => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);
  const isRetailer = true;

  const itemAdded = () => {
    toast.success("Item Added to Cart");
  };

  const deleteItem = () => {
    toast.success("Item Deleted Successfully");
  };

  const _renderCardInitialDetails = () => {
    return (
      <div>
        <S.ImageContainer>
          <S.Image src={theme.images.tagFile}></S.Image>
        </S.ImageContainer>
        <S.TitleContainer>{individualProduct.Title}</S.TitleContainer>
        <S.CategoryContainer $bgColor={theme.colors.primary}>
          {individualProduct.Category}
        </S.CategoryContainer>
        <S.ProductDes>
          <S.QuantityContainer>
            {PRODUCTS_CONFIG.PrQuantity}
            {individualProduct.Quantity}
          </S.QuantityContainer>
          <S.RupeeContainer>
            {PRODUCTS_CONFIG.PrMRP} {individualProduct.MRP}
          </S.RupeeContainer>
        </S.ProductDes>
      </div>
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
            {PRODUCTS_CONFIG.EditButton}
          </S.Button>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => deleteItem()}
          >
            <S.DeleteIcon />
            {PRODUCTS_CONFIG.DeleteButton}
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
          {PRODUCTS_CONFIG.AddToCartButton}
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
        individualProduct={individualProduct}
      />
    </div>
  );
};
