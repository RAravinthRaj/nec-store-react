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

export const ProductCard = () => {
  const theme = useTheme();
  const [modal, setModal] = useState(false);

  return (
    <div>
      <S.CardContainer>
        <S.ImageContainer>
          <S.Image src={theme.images.tagfile}></S.Image>
        </S.ImageContainer>
        <S.TitleContainer>Tag File</S.TitleContainer>
        <S.CategoryContainer $bgColor={theme.colors.primary}>
          Stationary
        </S.CategoryContainer>
        <S.ProductDes>
          <S.QuantityContainer>Quantity : 15</S.QuantityContainer>
          <S.RupeeContainer>MRP : ₹ 50</S.RupeeContainer>
        </S.ProductDes>
        <S.ButtonContainer>
          <S.Button
            $bgColor={theme.colors.primary}
            onClick={() => setModal(true)}
          >
            <S.EditIcon></S.EditIcon>Edit
          </S.Button>
          <S.Button $bgColor={theme.colors.primary}>
            <S.DeleteIcon></S.DeleteIcon>Delete
          </S.Button>
        </S.ButtonContainer>
      </S.CardContainer>
      <EditItemModal
        modalshow={modal}
        onClose={() => setModal(false)}
      ></EditItemModal>
    </div>
  );
};
