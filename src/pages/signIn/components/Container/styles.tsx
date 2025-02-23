import styled from "styled-components";

export const Holder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  gap: 100px;
  padding: 120px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 70px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 50px;
    padding-top: 20px;
    padding: 20px;
  }
`;

export const Holder1 = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`;

export const Holder2 = styled.div`
  flex: 1;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
