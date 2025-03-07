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
  min-height: 100vh;
  padding: 20px 40px;
  position: absolute;
  top: 9%;
  left: 17%;
  width: 83%;
  margin-top: 1%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    top: 0;
    left: 8%;
    width: 100%;
    margin-top: 11%;
  }

  @media (max-width: 576px) {
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 17%;
    padding: 20px 10px;
  }
`;

export const NavbarContainer = styled.div``;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    margin-left: 5%;
  }
`;

export const SearchIcon = styled(BsSearch)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 16px;
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
  flex: 1;
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
  flex: 0.5;
  color: black;
  font-size: 35px;

  @media (max-width: 576px) {
    flex: 1;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
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

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 576px) {
    font-weight: 550;
    font-size: 12px;
  }
`;

export const Divider = styled.div`
  border: solid 0.5px black;
  width: 87%;
  margin: 8px 10px;
  transform: scaleY(0.1);

  @media (max-width: 768px) {
    margin: 10px 15px;
  }

  @media (max-width: 576px) {
    margin: 7px 10px;
  }
`;

export const SortedSingleOption = styled.div<{
  $hoverbgColor: string;
  $isActive: boolean;
}>`
  text-decoration: none;
  color: #000000;

  &:hover {
    ${Title} {
      color: ${(props) => props.$hoverbgColor};
    }
  }

  ${({ $isActive, $hoverbgColor }) =>
    $isActive &&
    `
        ${Title} {
          color: ${$hoverbgColor};
        }
 `};
`;

export const SortedNavigation = styled.div<{ $bgColor: string }>`
  position: absolute;
  top: 7%;
  right: 47.5%;
  background-color: ${(props) => props.$bgColor};
  width: 15%;
  padding: 10px;
  gap: 10px;
  border-radius: 10px;
  z-index:1500;

  &::before {
    content: "";
    top: -13px;
    position: absolute;
    right: 10px;
    border-width: 0 10px 10px 10px;
    border-style: solid;
    border-color: transparent transparent  ${(props) =>
      props.$bgColor}; transparent;
  }

  @media (max-width: 768px) {
    top: 5%;
    width: 25%;
    right: 17%;
  }

  @media (max-width: 576px) {
    top: 3%;
    width: 40%;
    right: 8%;
  }
`;

export const UserOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
  cursor: pointer;
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
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
  margin-left: 2%;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: -5%;
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 0;
  }
`;
