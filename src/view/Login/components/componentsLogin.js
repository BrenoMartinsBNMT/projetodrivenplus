import styled from "styled-components";

export const MainContentLogin = styled.div`
width: 100vw;
display: flex;
height: 100vh;
background: #0e0e13;
flex-direction: column;
align-items: center;

font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;


color: #FFFFFF;
}

  img {
    
    position: relative;
    top: 20%;
  }
  button {
    border: none;
    outline: none;

    position: relative;
    top: 34%;
    width: 85%;
    height: 52px;
    background: #ff4791;
    border-radius: 8px;

  font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
  }

  a{
    position: relative;
    top: 35%;
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
text-decoration-line: underline;

color: #FFFFFF;
  }
`;
export const FormLogin = styled.div`
  position: relative;
  top: 35%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  input {
    border: none;
    outline: none;

    margin-bottom: 16px;

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
