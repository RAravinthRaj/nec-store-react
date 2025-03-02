/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarContainer = styled.div<{ $bgColor: string }>`
  display: flex;
  align-items: center;
  background-color: ${($props) => $props?.$bgColor};
  width: 100%;
  padding: 10px 15px;

  @media (max-width: 768px) {
    padding: 8px 15px;
  }

  @media (max-width: 576px) {
    padding: 8px 15px;
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
  align-items: center;
  gap: 20px;
  margin: 5px 10px;

  @media (max-width: 576px) {
    margin: 3px 8px;
  }
`;

export const UserName = styled.div<{ $bgColor: string }>`
  color: ${(props) => props?.$bgColor};
  font-size: 25px;
  font-weight: 550;
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

  @media (max-width: 768px) {
    font-size: 30px;
    margin: 0 15px;
  }

  @media (max-width: 576px) {
    font-size: 20px;
    margin: 0 8px;
    font-size: 20px;
  }
`;

export const UserMenu = styled.div<{ $bgColor: string }>`
  position: relative;
  top: 10px;
  right: 10;
  left: 86%;
  margin-15px;
  background-color: ${(props) => props.$bgColor};
  width:12%;
  padding:10px;
  gap:10px;
  border-radius:10px;
`;

export const UserOption = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
`;

export const UserIcon = styled.img`
  height: 14%;
  width: 13%;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: 576px) {
    font-weight: 550;
    font-size: 15px;
  }
`;

export const Divider = styled.div`
  border: solid 0.5px black;
  width: 85%;
  margin: 10px 10px;
  transform: scaleY(0.1);

  @media (max-width: 768px) {
    margin: 5px 15px;
    transform: scaleY(0.1);
  }

  @media (max-width: 576px) {
    margin: 0 15px;
  }
`;
