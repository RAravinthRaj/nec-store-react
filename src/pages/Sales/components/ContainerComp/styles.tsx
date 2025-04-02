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
import { LiaDownloadSolid } from "react-icons/lia";

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    margin-top: 0;
    gap: 10px;

    > * {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
    flex-direction: column;
    margin-top: 0;
    justify-content: center;
    font-size: 12px;
    padding: 0 3px;

    > * {
      width: 100%;
    }
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
  flex: 8;
  height: 50px;
  border-radius: 7px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex: 1;
    width: 100%;
    height: 45px;
  }

  @media (max-width: 576px) {
    padding: 6px;
    height: 40px;
    border-radius: 5px;
  }
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  margin-top: 5px;

  @media (max-width: 768px) {
    justify-content: flex-end;
    flex: 0.2;
  }

  @media (max-width: 576px) {
    justify-content: flex-end;
    flex: 0.5;
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
  flex: 1;
  display: flex;
  align-items: center;
  padding: 10px 0;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 5px;
  gap: 10px;
  color: white;

  @media (max-width: 576px) {
    padding: 15px;
    gap: 10px;
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
  margin: 4px 10px;
`;

export const ActionItem = styled.div`
  display: flex;
  flex: 1.5;
  justify-content: center;

  @media (max-width: 576px) {
    justify-content: center;
    margin-top: 10px;
  }
`;

export const StyledPageBox = styled(Box)`
  margin-top: 80px;
  overflow-x: auto;
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 576px) {
    padding: 8px;
    margin-top: 64px;
  }
`;

export const MainContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding: 20px;
  height: 100%;

  @media (max-width: 576px) {
    padding: 0;
    margin-top: 15px;
    justify-content: center;
  }
`;

export const Date = styled.div`
  flex: 1.5;
  display: flex;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 0px;
    margin-bottom: 10px;
    gap: 200px;
  }

  @media (max-width: 576px) {
    margin-bottom: 10px;
    gap: 20px;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  border-radius: 5px;
  gap: 18px;
  margin: 0 15px;

  @media (max-width: 1024px) {
    margin: 0 15px;
    justify-content: space-around;
    gap: -20px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    justify-content: space-around;
    margin: 0;
  }

  @media (max-width: 576px) {
    flex-direction: row;
  }
`;

export const DateTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const DateInput = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #bdbdbd;
  outline: none;
  padding: 5px 0;
  font-size: 16px;
  transition: all 0.3s ease;
  min-width: 80px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

export const TitleBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${(props) => props?.$bgColor};
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 6px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
  min-width: 620px;

  @media (max-width: 576px) {
    min-width: 640px;
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
    min-width: 640px;
  }
`;

export const TitleComp = styled.div`
  flex: 1;
  text-align: center;
  white-space: normal;
  min-width: 100px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const BodyComponent = styled.div``;

export const SalesContainer = styled.div`
  margin-top: 30px;
  overflow-x: auto;
  overflow-y: auto;
  max-height: 60vh;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    max-height: 64vh;
  }

  @media (max-width: 576px) {
    margin-bottom: 40px;
  }
`;

export const SalesDivider = styled.div`
  border: solid 0.5px rgba(0, 0, 0, 0.2);
  transform: scaleY(0.1);
  min-width: 500px;
  margin: 5px;

  @media (max-width: 768px) {
    margin: 10px 20px;
    min-width: 560px;
  }

  @media (max-width: 576px) {
    margin: 7px 1px;
    min-width: 640px;
  }
`;

export const FooterContent = styled.div`
  flex: 1;
`;

export const FooterBox = styled.div<{ $bgColor: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props?.$bgColor};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    margin-bottom: 10px;
  }
`;

export const DownloadIcon = styled(LiaDownloadSolid)`
  color: white;
  font-size: 21px;
`;
