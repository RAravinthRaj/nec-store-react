/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { useTheme } from "../../hooks/useTheme.hook";

interface ErrorPageProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  onPress: () => void;
}

export const ErrorPage = ({
  title,
  subtitle,
  buttonTitle,
  onPress,
}: ErrorPageProps) => {
  const theme = useTheme();

  return (
    <S.Container $bgColor={theme.colors.backGround}>
      <S.Image src={theme.images.error} />
      <S.Title $primaryColor={theme.colors.primary}>{title}</S.Title>
      <S.Subtitle $secondaryColor={theme.colors.secondary}>
        {subtitle}
      </S.Subtitle>
      <S.Button $primaryColor={theme.colors.primary} onClick={onPress}>
        {buttonTitle}
      </S.Button>
    </S.Container>
  );
};

export default ErrorPage;
