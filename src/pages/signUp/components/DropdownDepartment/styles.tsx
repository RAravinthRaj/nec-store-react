/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";
import { Dropdown } from "react-bootstrap";

export const DepartmentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const DropDownIcon = styled(SlArrowDown)<{
  $color: string;
  $bgColor: string;
}>`
  color: ${(props) => props?.$color};
  font-size: 16px;

  &:hover {
    background: none;
    background-color: ${(props) => props?.$bgColor};
  }
`;

export const ShowDepartment = styled.div<{ $bgColor: string }>`
  background-color: ${(props) => props?.$bgColor};
`;

export const CustomToggle = styled(Dropdown.Toggle)<{ $bgColor: string }>`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  --bs-btn-active-bg: ${(props) => props.$bgColor};
  --bs-btn-hover-bg: ${(props) => props.$bgColor};

  &::after {
    display: none;
  }
`;

export const CustomDropdown = styled(Dropdown)`
  flex: 1;
`;

export const SelectedDepartment = styled.div<{ $bgColor: string }>`
  flex: 10;
  color: ${(props) => props.$bgColor};
  margin-top: 1%;
`;
