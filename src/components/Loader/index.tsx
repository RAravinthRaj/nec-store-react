/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import { Modal } from "react-bootstrap";
import { useTheme } from "../../hooks";
import * as S from "./styles";

export interface ILoader {
  loadingText?: string;
  useModalLoader?: boolean;
}

export const Loader = ({
  loadingText = "Request in progress.\nPlease wait...",
  useModalLoader = false,
}: ILoader) => {
  const theme = useTheme();

  if (useModalLoader) {
    return (
      <Modal
        show={useModalLoader}
        style={{
          height: "100vh",
          width: "100vw",
          backgroundColor: "rgba(0,0,0,0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
      </Modal>
    );
  }

  return (
    <S.LoaderWrapper
      $primary={theme.colors.primary}
      $secondary={theme.colors.secondary}
    >
      <S.SvgContainer viewBox="0 0 86 86" height="86" width="86">
        <S.Circle cx="43" cy="43" r="40" $variant="back" $size="outer" />
        <S.Circle cx="43" cy="43" r="40" $variant="front" $size="outer" />
      </S.SvgContainer>
      <S.SvgContainer viewBox="0 0 60 60" height="60" width="60">
        <S.Circle cx="30" cy="30" r="27" $variant="back" $size="middle" />
        <S.Circle cx="30" cy="30" r="27" $variant="front" $size="middle" />
      </S.SvgContainer>
      <S.SvgContainer viewBox="0 0 34 34" height="34" width="34">
        <S.Circle cx="17" cy="17" r="14" $variant="back" $size="inner" />
        <S.Circle cx="17" cy="17" r="14" $variant="front" $size="inner" />
      </S.SvgContainer>
      <S.Text data-text={loadingText}>{loadingText}</S.Text>
    </S.LoaderWrapper>
  );
};
