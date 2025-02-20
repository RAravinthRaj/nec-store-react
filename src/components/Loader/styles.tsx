/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import styled, { keyframes, css } from "styled-components";

export const circleOuterAnimation = keyframes`
  0% { stroke-dashoffset: 25; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 301; }
  80% { stroke-dashoffset: 276; }
  100% { stroke-dashoffset: 276; }
`;

export const circleMiddleAnimation = keyframes`
  0% { stroke-dashoffset: 17; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 204; }
  80% { stroke-dashoffset: 187; }
  100% { stroke-dashoffset: 187; }
`;

export const circleInnerAnimation = keyframes`
  0% { stroke-dashoffset: 9; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 106; }
  80% { stroke-dashoffset: 97; }
  100% { stroke-dashoffset: 97; }
`;

export const textAnimation = keyframes`
  0% { clip-path: inset(0 100% 0 0); }
  50% { clip-path: inset(0); }
  100% { clip-path: inset(0 0 0 100%); }
`;

export const LoaderWrapper = styled.div<{
  $primary: string;
  $secondary: string;
}>`
  --background: ${({ $secondary }) => $secondary};
  --front-color: ${({ $primary }) => $primary};
  --back-color: #c3c8de;
  --text-color: #414856;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SvgContainer = styled.svg`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.circle<{ $variant: string; $size: string }>`
  position: absolute;
  fill: none;
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-linejoin: round;
  transform: rotate(-100deg);
  transform-origin: center;
  stroke: ${({ $variant }) =>
    $variant === "back" ? "var(--back-color)" : "var(--front-color)"};
  stroke-dasharray: ${({ $size }) =>
    $size === "outer"
      ? "62.75 188.25"
      : $size === "middle"
      ? "42.5 127.5"
      : "22 66"};
  animation: ${({ $size, $variant }) =>
    css`
      ${$variant === "back"
        ? $size === "outer"
          ? circleOuterAnimation
          : $size === "middle"
          ? circleMiddleAnimation
          : circleInnerAnimation
        : $size === "outer"
        ? css`
            ${circleOuterAnimation} 1.8s ease infinite 0.15s
          `
        : $size === "middle"
        ? css`
            ${circleMiddleAnimation} 1.8s ease infinite 0.1s
          `
        : css`
            ${circleInnerAnimation} 1.8s ease infinite 0.05s
          `}
    `};
  animation-duration: 1.8s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

export const Text = styled.div`
  position: absolute;
  bottom: -30px;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 0.2px;
  color: var(--text-color);
  &::after {
    content: attr(data-text);
    color: var(--front-color);
    animation: ${textAnimation} 3.6s ease infinite;
    position: absolute;
    left: 0;
  }
`;
