/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { SlArrowDown } from "react-icons/sl";

export const NavbarContainer = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  background-color: ${($props) => $props?.$bgColor};
  width: 100%;
  padding: 2px 15px;
  position: fixed;

  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 576px) {
    padding: 8px 10px;
  }
`;

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    gap: 0px;
  }

  @media (max-width: 576px) {
    gap: 0px;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const TitleText = styled.div`
  font-size: 25px;
  font-weight: 550;
`;

export const UserContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 20px;
  margin: 3px 10px;

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

export const ImageBackGround = styled.div`
  border-radius: 50%;
  background-color: white;
  padding: 2px;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;

  @media (max-width: 576px) {
    width: 37px;
    height: 37px;
  }
`;

export const Icon = styled(GiHamburgerMenu)`
  filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
    brightness(80%) contrast(150%);
  font-size: 160%;

  @media (max-width: 768px) {
    margin: 15px;
  }

  @media (max-width: 576px) {
    margin: 8px;
  }
`;

export const UserIcon = styled.img`
  height: 14%;
  width: 15%;

  @media (max-width: 768px) {
    height: 14%;
    width: 16%;
  }

  @media (max-width: 576px) {
    height: 13%;
    width: 13%;
  }
`;

export const IconText = styled.div`
  font-size: 18px;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const userNavigation = styled(Link)`
  text-decoration: none;
  color: #000000;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &:hover {
    ${UserIcon} {
      filter: invert(100%) sepia(0%) saturate(0%) brightness(100%)
        contrast(100%);
    }

    ${IconText} {
      color: #ffffff;
    }
  }
`;

export const NameDivider = styled.div`
  border: solid 0.5px black;
  margin: 3px;
  transform: scaleY(0.1);
  width: 95%;
  left: 5%;
`;

export const UserOptionsHolder = styled.div``;

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

export const CustomDropdown = styled(Dropdown)`
  margin: 5px;
`;

export const DropDownIcon = styled(SlArrowDown)<{
  $bgColor: string;
}>`
  color: black;
  font-size: 13px;
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

    ${UserIcon} {
      filter: invert(20%) sepia(94%) saturate(1500%) hue-rotate(220deg)
        brightness(80%) contrast(150%);
    }
  }
`;

export const MobileNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
