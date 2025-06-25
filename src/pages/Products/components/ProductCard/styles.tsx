import styled from "styled-components";
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import { LiaCartArrowDownSolid } from "react-icons/lia";

export const CardContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
  background-color: #fff;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 576px) {
    padding: 16px;

    &:hover {
      transform: none;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const ProductDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const TitleContainer = styled.h3`
  text-align: center;
  font-size: 22px;
  margin: 12px 0;
  word-wrap: break-word;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

export const CategoryContainer = styled.h5<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};
  text-align: center;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ProductDes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-top: 20px;
`;

export const QuantityContainer = styled.h5`
  font-size: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const RupeeContainer = styled.h5`
  font-size: 13px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 15px;
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background-color: ${(props) => props.$bgColor};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  gap: 6px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const EditIcon = styled(FaPencilAlt)`
  color: white;
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const DeleteIcon = styled(ImBin)`
  color: white;
  font-size: 14px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CartIcon = styled(LiaCartArrowDownSolid)`
  color: white;
  font-size: 18px;

  @media (max-width: 576px) {
    font-size: 16px;
  }
`;
