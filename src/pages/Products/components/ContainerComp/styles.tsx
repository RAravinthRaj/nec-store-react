/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { LiaSortAmountDownAltSolid } from "react-icons/lia";
import { FiPlus } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";

export const MainContainer = styled(Container)`
  max-width: 100% !important;
  display: flex;
  flex-direction: column;
  left: 0;
  width: 100% !important;
  padding: 0 !important;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 576px) {
    width: 100%;
    padding: 20px 10px;
  }
`;

export const NavbarContainer = styled.div`
  flex: 1;
`;

export const PageContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 540px) {
    margin: 20px;
    left: 2%;
  }
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 576px) {
    margin-left: 5%;
    font-size: 12px;
  }
`;

export const SearchIcon = styled(BsSearch)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 16px;

  @media (max-width: 576px) {
    margin-left: -60px;
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 0 20px;
  flex: 1;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const InputWrapper = styled.div<{ $bgColor: string }>`
  flex: 2.5;
  height: 50px;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 100%;
    height: 45px;
  }

  @media (max-width: 576px) {
    flex: 0.5;
    width: 82%;
    padding: 8px 20px;
  }
`;

export const SortIcon = styled(LiaSortAmountDownAltSolid)<{
  $bgColor: string;
}>`
  flex: 1;
  color: black;
  font-size: 40px;

  @media (max-width: 576px) {
    flex: 1;
  }
`;

export const ButtonContainer = styled.div`
  flex: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-left: 10px;
`;

export const Button = styled.button<{ $bgColor: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 12px;
  color: white;

  @media (max-width: 576px) {
    padding: 5px 0;
    gap: 10px;
  }
`;

export const AddIcon = styled(FiPlus)`
  color: white;
  font-size: 18px;
`;

export const PlusButtonContainer = styled(FiPlus)<{ $bgColor: string }>`
  color: white;
  padding: 5px;
  font-size: 40px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 576px) {
    font-size: 30px;
    bottom: 30px;
    right: 30px;
  }
`;

export const FabButton = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
  font-size: 10px;
  padding: 7px 12px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  position: fixed;
  bottom: 40px;
  right: 100px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 576px) {
    right: 70px;
  }
`;

export const FabDivider = styled.div`
  width: 125%;
  margin-left: -12px;
  border: solid 0.5px white;
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
`;

export const DropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  place-items: center;
  margin-top: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 576px) {
    align-items: center;
    margin: -6px;
  }
`;

export const SideDrawerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const UserContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  margin: 5px 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    margin: 3px;
  }
`;

export const UserName = styled.div<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 25px;
  font-weight: 550;
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: 550;
  }

  @media (max-width: 576px) {
    font-size: 17px;
    font-weight: 550;
    margin: 5px 0;
  }
`;

export const DropdownMenu = styled(Dropdown.Menu)<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  width: 200px;

  @media (max-width: 768px) {
    width: 180px;
  }
`;

export const DropdownItem = styled(Dropdown.Item)<{ $bgColor: string }>`
  font-size: 17px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &:hover {
    background: none;
    ${IconText} {
      color: ${(props) => props?.$bgColor};
    }
  }
`;

export const MobileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NameDivider = styled.div`
  border: solid 0.5px black;
  margin: 3px;
  transform: scaleY(0.1);
  width: 95%;
  left: 5%;
`;

export const ActionItem = styled.div`
  flex: 1;
  display: flex;
`;

export const SortContainer = styled.div`
  flex: 0.7;
  flex-wrap: wrap;
  margin-left: -35px;
  margin-right: 20px;

  @media (max-width: 576px) {
    margin-left: 12px;
    margin-right: 10px;
  }
`;

export const SortedDropdownMenu = styled(Dropdown.Menu)<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
  top: calc(35% + 5px) !important;
  margin-right: 10px;
`;

export const SortedIconText = styled.div`
  font-size: 16px;
  color: #000000;

  @media (max-width: 576px) {
    font-size: 15px;
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
