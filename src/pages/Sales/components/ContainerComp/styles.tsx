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
  top: 10%;
  position: absolute;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  left: 20%;
`;

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

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
  margin-left: 40px;
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

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DateTitle = styled.div`
  flex: 1;
  font-size: 17px;
  gap: 10px;
`;

export const DateInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-size: 17px;
  padding: 0 10px;

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const SortIcon = styled(LiaSortAmountDownAltSolid)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 35px;

  @media (max-width: 576px) {
    flex: 1;
  }
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
  top: 12%;
  right: 20%;
  background-color: ${(props) => props.$bgColor};
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
    top: 7%;
    right: 13%;
  }

  @media (max-width: 576px) {
    top: 4%;
    right: 5%;
  }
`;

export const UserOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
  cursor: pointer;
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

  @media (max-width: 576px) {
    font-size: 13px;
  }
`;

export const DropDownMenu = styled(Dropdown.Menu)`
  margin-top: 10px;
`;

export const Date = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const ActionBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 50px;
`;
