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

  const itemadded = () => {
    return toast.success("Item Added to Cart");
  };

  const deleteItem = () => {
    toast.success("Item Deleted Successfully");
  };

  return (
    <div>
      <S.CardContainer>
        <S.ImageContainer>
          <S.Image src={theme.images.tagfile}></S.Image>
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
        {isRetailer ? (
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => setModal(true)}
            >
              <S.EditIcon></S.EditIcon>
              {PRODUCTS_CONFIG.EditButton}
            </S.Button>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => deleteItem()}
            >
              <S.DeleteIcon></S.DeleteIcon>
              {PRODUCTS_CONFIG.DeleteButton}
            </S.Button>
          </S.ButtonContainer>
        ) : (
          <S.ButtonContainer>
            <S.Button
              $bgColor={theme.colors.primary}
              onClick={() => {
                itemadded();
              }}
            >
              <S.CartIcon></S.CartIcon>
              {PRODUCTS_CONFIG.AddToCartButton}
            </S.Button>
          </S.ButtonContainer>
        )}
      </S.CardContainer>
      <EditItemModal
        modalshow={modal}
        onClose={() => setModal(false)}
        individualProduct={individualProduct}
      ></EditItemModal>
    </div>
  );
};
