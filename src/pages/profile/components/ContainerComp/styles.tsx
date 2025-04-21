/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled from "styled-components";
import { Box } from "@mui/material";
import { FiPlus } from "react-icons/fi";
import { MdBlockFlipped, MdOutlineModeEditOutline } from "react-icons/md";
import { SlLockOpen } from "react-icons/sl";

export const Button = styled.button<{ $bgColor: string; $isBlock: boolean }>`
  flex: 0.3;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  justify-content: center;
  border: none;
  background-color: ${(props) => props?.$bgColor};
  opacity: ${(props) => (props.$isBlock ? "0.4" : "1")};
  pointer-events: ${(props) => (props.$isBlock ? "none" : "auto")};
  cursor: ${(props) => (props.$isBlock ? "no-drop" : "pointer")};
  border-radius: 5px;
  gap: 10px;
  color: white;

  @media (max-width: 576px) {
    flex: 0.5;
    padding: 12px;
    gap: 10px;
    font-size: 14px;
  }
`;

export const BannerContainer = styled.img`
  width: 101%;
  height: 110px;
  margin-left: -13px;

  @media (max-width: 768px) {
    width: 101%;
    margin-left: -10px;
    height: 130px;
  }

  @media (max-width: 576px) {
    height: 80px;
    margin-left: -4px;
  }
`;

export const StyledPageBox = styled(Box)`
  margin-top: 70px;
  width: 100vw;

  @media (max-width: 768px) {
    margin-top: 50px;
  }

  @media (max-width: 576px) {
    margin-top: 40px;
  }
`;

export const MainContainer = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: 576px) {
    padding: 0;
    margin-top: 15px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 576px) {
    margin-top: 10px;
  }
`;

export const UserImageContainer = styled.div`
  position: relative;
  width: fit - content;
  margin-top: -40px;
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  z-index: 0;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 1024px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 576px) {
    width: 80px;
    height: 80px;
  }
`;

export const PlusIconContainer = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
  display: flex;
  justify-content: center;
  background-color: black;
  align-items: center;
  background-color: black;
  border-radius: 50%;
  height: 37px;
  width: 37px;
  z-index: 1;
  cursor: pointer;

  @media (max-width: 576px) {
    height: 25px;
    width: 25px;
    bottom: 2px;
    right: 4px;
  }
`;

export const AddIcon = styled(FiPlus)`
  color: white;
  font-size: 25px;
  strokewidth: 2;

  @media (max-width: 576px) {
    font-size: 15px;
  }
`;

export const DataContainer = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 576px) {
    margin-top: 40px;
    margin: 8px;
    gap: 30px;
  }
`;

export const NameContainer = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: black;

  @media (max-width: 576px) {
    font-size: 30px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }
`;

export const EmailContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 21px;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 17px;
    gap: 5px;
    align-items: flex-start;
  }
`;

export const DeptContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 21px;
  padding-left: 20px;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 17px;
    gap: 5px;
    align-items: flex-start;
    padding-left: 0px;
  }
`;

export const RollContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-word;
  font-size: 21px;
  padding-left: 20px;
  gap: 10px;

  @media (max-width: 576px) {
    font-size: 17px;
    gap: 5px;
    align-items: flex-start;
    padding-left: 0px;
  }
`;

export const MainContainerItems = styled.div`
  padding: 0 60px;

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

export const Title = styled.div<{ $color: string }>`
  color: ${(props) => props?.$color};
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;

  @media (max-width: 576px) {
    gap: 25px;
  }
`;

export const BlockIcon = styled(MdBlockFlipped)`
  color: white;
  font-size: 20px;
  strokewidth: 2;
`;

export const PermitIcon = styled(SlLockOpen)`
  color: white;
  font-size: 18px;
  strokewidth: 2;
`;

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const Circle = styled.div<{
  $bgColor: string;
  $isNotFirst: boolean;
  $isLast: boolean;
}>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props?.$bgColor};
  border-radius: 50%;
  margin-left: ${(props) => (props.$isNotFirst ? "-15px" : "0px")};
  border: ${(props) => (props.$isLast ? "solid 1.5px black" : "none")};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 576px) {
    height: 30px;
    width: 30px;
    margin-left: ${(props) => (props.$isNotFirst ? "-15px" : "0px")};
  }
`;

export const RoleAddIcon = styled(FiPlus)`
  color: black;
  font-size: 25px;
  strokewidth: 2;
  cursor: pointer;
`;

export const EditIcon = styled(MdOutlineModeEditOutline)`
  color: black;
  font-size: 35px;
  strokewidth: 2;
  cursor: pointer;

  @media (max-width: 576px) {
    font-size: 25px;
  }
`;
