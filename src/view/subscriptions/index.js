import * as style from "./components/componentsSubscription";

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../components/context/context";
import { useNavigate } from "react-router";

export default function Subscription() {
  let [plans, setPlans] = useState("");
  let { tokenLogin } = useContext(UserContext);
  let tokenLocalStorage = localStorage.getItem("token");
  let navigate = useNavigate();
  //

  //
  useEffect(() => {
    if (tokenLogin === "") {
      let promisse = axios.get(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
        {
          headers: {
            Authorization: `Bearer ${tokenLocalStorage}`,
          },
        }
      );
      promisse.then((element) => setPlans(element.data));
    } else {
      let promisse = axios.get(
        "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships",
        {
          headers: {
            Authorization: `Bearer ${tokenLogin}`,
          },
        }
      );
      promisse.then((element) => setPlans(element.data));
    }
  }, []);

  function choosePlan(e) {
    console.log(e.target.id);
    navigate(`/subscription/${e.target.id}`, { replace: true });
  }

  return (
    <style.MainContentSubscription>
      <p>Escolha Seu Plano</p>
      <style.ChooseYourPlan>
        {plans === "" ? (
          <></>
        ) : (
          plans.map((element) => {
            return (
              <style.PlanToChoose
                id={element.id}
                key={element.id}
                onClick={choosePlan}
              >
                <img src={element.image} alt="" id={element.id} />{" "}
                <p id={element.id}>R$ {element.price}</p>
              </style.PlanToChoose>
            );
          })
        )}
      </style.ChooseYourPlan>
    </style.MainContentSubscription>
  );
}
