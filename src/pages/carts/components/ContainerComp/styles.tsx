/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { LiaSortAmountDownAltSolid } from "react-icons/lia";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";
import { Box } from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import { GiShoppingCart } from "react-icons/gi";

export const ActionItem = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;

  @media (max-width: 576px) {
    justify-content: center;
    flex: 1;
    margin-top: 10px;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;

  @media (max-width: 576px) {
    margin: 0;
    justify-content: center;
    font-size: 12px;
    gap: 8px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 15px;

  flex: 1;
  width: 100%;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div<{ $bgColor: string }>`
  flex: 8;
  height: 50px;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  border: solid 1px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    height: 45px;
  }

  @media (max-width: 576px) {
    flex: 1;
    padding: 6px 10px;
    height: 40px;
    border-radius: 5px;
    width: 100%;
    margin: 0;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-top: 3px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-end;
    flex: 0.2;
  }

  @media (max-width: 576px) {
    justify-content: flex-end;
    margin-left: 20px;
  }
`;

export const SortIcon = styled(LiaSortAmountDownAltSolid)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 40px;

  @media (max-width: 768px) {
    align-self: flex-end;
  }

  @media (max-width: 576px) {
    align-self: flex-end;
    font-size: 35px;
  }
`;

export const SortedDropdownMenu = styled(Dropdown.Menu)<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  margin-right: 10px;
`;

export const SortedIconText = styled.div`
  font-size: 16px;

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const SortedDropdownItem = styled(Dropdown.Item)<{ $bgColor: string }>`
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &:hover {
    background: none;
    ${SortedIconText} {
      color: ${(props) => props?.$bgColor};
    }
  }
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 10px;
  color: white;

  @media (max-width: 576px) {
    padding: 12px;
    gap: 10px;
    font-size: 14px;
  }
`;

export const CustomToggle = styled(Dropdown.Toggle)<{ $bgColor: string }>`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 7px;

  padding: 0;
  margin: 0;
  --bs-btn-active-bg: none;
  --bs-btn-hover-bg: none;

  &::after {
    display: none;
  }

  @media (max-width: 576px) {
    margin: 0 5px;
  }
`;

export const CustomDropdown = styled(Dropdown)``;

export const DropDownIcon = styled(SlArrowDown)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 13px;
`;

export const IconText = styled.div<{ $bgColor: string }>`
  color: ${(props) => props.$bgColor};

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const CategoryDropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;
`;

export const DropdownMenu = styled(Dropdown.Menu)<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  width: 200px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const Divider = styled.div`
  border-top: 0.2px solid rgba(0, 0, 0, 0.2);
  margin: 2px 10px;
`;

export const StyledPageBox = styled(Box)`
  margin-top: 70px;
  width: 100vw;
  padding: 10px;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 576px) {
    padding: 8px;
    margin-top: 50px;
  }
`;

export const MainContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 576px) {
    padding: 0;
    margin-top: 15px;
    justify-content: center;
  }
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props?.$bgColor};
  padding: 18px 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 620px;
  position: sticky;

  z-index: 1;

  @media (max-width: 576px) {
    min-width: 640px;
    font-size: 13px;
    padding: 13px;
  }
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  min-width: 620px;

  @media (max-width: 576px) {
    padding: 8px;
    min-width: 640px;
  }
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  white-space: normal;
  overflow-wrap: break-word;
  word-break: break-word;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 8px;

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const CancelComp = styled(RxCrossCircled)<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  cursor: pointer;
`;

export const QuantityWrap = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: inner-spin-button !important;
    appearance: inner-spin-button !important;
    opacity: 1 !important;
    display: block !important;
    height: 1.3em;
    width: 1.3em;
  }

  -moz-appearance: textfield;

  &:focus {
    -moz-appearance: number-input;
  }

  width: 45%;
  flex: 0.5;
  padding: 4px 8px;
  border-radius: 5px;
  border: solid 0.5px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    font-size: 14px;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: inner-spin-button !important;
      appearance: inner-spin-button !important;
      opacity: 1 !important;
      display: block !important;
      margin-top: 9%;
      height: 1.1em;
      width: 1.1em;
    }
  }
`;

export const Icon = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;

  &:hover {
    background: none;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const BodyComponent = styled.div``;

export const CartContainer = styled.div`
  margin-top: 30px;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 60vh;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    max-height: 70vh;
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;
export const CartDivider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.9);
  min-width: 500px;
  margin: 5px;

  @media (max-width: 768px) {
    margin: 10px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 7px 7px;
    min-width: 620px;
  }
`;

export const FooterContent = styled.div`
  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const FooterBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: ${(props) => props?.$bgColor};
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
  }
`;

export const DownloadIcon = styled(GiShoppingCart)`
  color: white;
  font-size: 22px;
`;
