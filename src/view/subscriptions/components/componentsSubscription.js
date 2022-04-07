import styled from "styled-components";

export const MainContentSubscription = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  background: #0e0e13;
  flex-direction: column;
  align-items: center;

  p {
    position: relative;
    top: 3%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #ffffff;
  }
`;
export const ChooseYourPlan = styled.div``;

export const PlanToChoose = styled.div`
  position: relative;
  top: 15%;
  width: 290px;
  height: 160px;

  margin-bottom: 15px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: #0e0e13;
  border: 3px solid #7e7e7e;
  box-sizing: border-box;
  border-radius: 12px;
  img {
    width: 43%;
    height: 62%;
  }
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #ffffff;
  }
`;
