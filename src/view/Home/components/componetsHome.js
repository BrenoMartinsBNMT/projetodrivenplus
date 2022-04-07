import styled from "styled-components";

export const MainContentHome = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  background: #0e0e13;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;

    color: #ffffff;
  }
`;

export const IconsTop = styled.div`
  width: 90vw;
  display: flex;
  align-content: space-around;
  justify-content: space-between;
  align-items: center;
  img {
    width: 41%;
    height: 50%;
  }
  span {
    font-size: 34px;
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  justify-content: space-around;
`;
export const BenefitsUse = styled.div`
  display: flex;
  width: 80vw;

  flex-direction: column;
  align-items: center;

  button {
    margin-top: 8px;
    border: none;
    outline: none;
    width: 90%;
    height: 52px;

    background: #ff4791;
    border-radius: 8px;
  }
  a {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    color: #ffffff;
  }
`;
export const ButtonsPLan = styled.div`
  display: flex;
  width: 80vw;

  flex-direction: column;
  align-items: center;
  button {
    margin-top: 8px;
    border: none;
    outline: none;
    width: 90%;
    height: 52px;

    border-radius: 8px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
  .change {
    background: #ff4791;
  }
  .cancel {
    background: #ff4747;
  }
`;
