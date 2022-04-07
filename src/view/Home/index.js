import * as style from "./components/componetsHome";
import { UserContext } from "../../components/context/context";
import { useContext } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
export default function Home() {
  let navigate = useNavigate();
  let { subChoose } = useContext(UserContext);
  let tokenLocalStorage = localStorage.getItem("token");
  function changeAtualPlan() {
    navigate("/subscription", {
      replace: true,
    });
  }
  function cancelPlan() {
    let promisse = axios.delete(
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
      {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      }
    );
    promisse.then(() => navigate("/subscription", { replace: true }));
  }
  return (
    <style.MainContentHome>
      <style.IconsTop>
        <img src={subChoose.membership.image} alt="" />{" "}
        <span class="material-icons">account_circle</span>
      </style.IconsTop>
      <p>Olá, Fulano</p>
      <style.ButtonsDiv>
        <style.BenefitsUse>
          {subChoose.membership.perks.map((element) => {
            return (
              <button>
                <a href={element.link}>{element.title}</a>
              </button>
            );
          })}
        </style.BenefitsUse>
        <style.ButtonsPLan>
          <button className="change" onClick={changeAtualPlan}>
            Mudar Plano
          </button>
          <button className="cancel" onClick={cancelPlan}>
            Cancelar Plano
          </button>
        </style.ButtonsPLan>
      </style.ButtonsDiv>
    </style.MainContentHome>
  );
}
