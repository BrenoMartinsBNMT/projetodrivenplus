import styled from "styled-components";

export const MainPaySubscription = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  background: #0e0e13;
  flex-direction: column;
  align-items: center;
  a {
    position: relative;
    top: 5%;
    right: 38%;
  }
  span {
    font-size: 36px;
    color: #ffffff;
  }
  form {
    position: relative;
    top: 10%;
  }

  button {
    position: relative;
    top: 19%;
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
  position: relative;
  top: 9%;
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
  position: relative;
  top: 13%;
  right: 15%;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  color: #ffffff;
  span {
    font-size: 18px;
    position: relative;
    top: 0%;
    right: 0%;
  }
  ol {
    margin-left: 18px;
    list-style: decimal;
  }
`;

export const PricePlan = styled.div`
  position: relative;
  top: 16%;
  right: 12%;

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
  position: relative;
  top: 19%;
  left: 10%;
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
  position: relative;
  top: 19%;
  left: 10%;

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
  width: 248px;
  height: 210px;

  background: #ffffff;
  border-radius: 12px;
  p {
    padding-top: 15%;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;

    color: #000000;
  }
  .buttons-confirm {
    display: flex;
    position: relative;
    top: 20%;
    right: 7%;
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
