import styled from "styled-components";

export const MainPaySubscription = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  background: #0e0e13;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  a {
    width: 80vw;
  }
  span {
    font-size: 36px;
    color: #ffffff;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    left: 10%;
    padding: 0px;
    border: none;
    outline: none;
    width: 84%;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;

    color: #ffffff;
  }
  .escondido {
    display: none;
  }
`;

export const LogoPaySubscrpition = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;

    color: #ffffff;
  }
`;

export const BenefitsPlan = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #ffffff;
  span {
    font-size: 18px;
  }
  ol {
    margin-left: 18px;
    list-style: decimal;
  }
`;

export const PricePlan = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;

    color: #ffffff;
  }
`;
export const InfosCardPay = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  flex-direction: column;
  align-items: center;
  width: 100%;
  input {
    border: none;
    outline: none;

    margin-bottom: 8px;

    background: #ffffff;
    border-radius: 8px;
    width: 80%;
    height: 52px;
    padding-left: 15px;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #7e7e7e;
  }
`;

export const SecurityInfoCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  input {
    border: none;
    outline: none;

    margin: 0px 9px 9px 0px;

    background: #ffffff;
    border-radius: 8px;
    width: 36%;
    height: 52px;
    padding-left: 15px;
  }

  input::placeholder {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;

    color: #7e7e7e;
  }
`;
export const ModalPay = styled.div`
display: flex;
position: absolute;
z-index: 1;
width: 100vw;
height: 100vh;
background: rgba(0,0,0,0.7);
align-items: center;
justify-content: center;
}
`;
export const ConfirmPay = styled.div`
  display: flex;
  padding: 0px 10px 0px 10px;
  width: 248px;
  height: 210px;
  background: #ffffff;
  border-radius: 12px;
  flex-direction: column;
  justify-content: space-around;
  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #000000;
  }
  .buttons-confirm {
    display: flex;
  }
  .confirm-not {
    margin: 7px;
    width: 42%;
    height: 52px;
    background: #cecece;
    border-radius: 8px;
  }
  .confirm-ok {
    margin: 7px;
    width: 42%;
    height: 52px;
  }
`;
