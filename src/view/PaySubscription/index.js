import * as style from "./components/componentsPaySubscription";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import money from "../../components/assets/money.svg";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { UserContext } from "../../components/context/context";

export default function PaySubscription() {
  let { setSubChoose } = useContext(UserContext);
  let tokenLocalStorage = localStorage.getItem("token");
  let { idPlan } = useParams();
  let [dataPlan, setDataPlan] = useState("");
  let [nameOnCard, setNameOnCard] = useState("");
  let [cardNumber, setCardNumber] = useState("");
  let [securityCode, setSecurityCode] = useState("");
  let [validate, setValidate] = useState("");
  let navigate = useNavigate();
  let [nameClass, setNameClass] = useState("escondido");

  useEffect(() => {
    let promisse = axios.get(
      `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlan}`,

      {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      }
    );
    promisse.then((element) => {
      setDataPlan(element.data);
    });
  }, []);
  function showModal(e) {
    e.preventDefault();
    if (nameClass === "escondido") {
      if (
        nameOnCard === "" &&
        cardNumber === "" &&
        securityCode === "" &&
        validate === ""
      ) {
        return;
      } else {
        setNameClass("");
      }
    }
  }
  function paySubscribe() {
    let promisse = axios.post(
      "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions",
      {
        membershipId: idPlan,
        cardName: nameOnCard,
        cardNumber: cardNumber,
        securityNumber: securityCode,
        expirationDate: validate,
      },

      {
        headers: {
          Authorization: `Bearer ${tokenLocalStorage}`,
        },
      }
    );
    promisse.then((element) => {
      setSubChoose(element.data);

      navigate("/home", { replace: true });
    });
    promisse.catch((element) =>
      alert(`${element}
preencha os campos novamente ou recarregue a página`)
    );
  }

  return (
    <>
      {dataPlan === "" ? (
        <style.MainPaySubscription>
          <TailSpin />
        </style.MainPaySubscription>
      ) : (
        <style.MainPaySubscription>
          <style.ModalPay className={nameClass}>
            <style.ConfirmPay>
              <p>
                Tem certeza que deseja assinar o plano Driven Plus (R${" "}
                {dataPlan.price})?
              </p>
              <div className="buttons-confirm">
                <button
                  className="confirm-not"
                  onClick={() => {
                    setNameClass("escondido");
                  }}
                >
                  Não
                </button>
                <button className="confirm-ok" onClick={paySubscribe}>
                  Sim
                </button>
              </div>
            </style.ConfirmPay>
          </style.ModalPay>
          <Link to="/subscription">
            <span className="material-icons md-48">arrow_back</span>
          </Link>

          <style.LogoPaySubscrpition>
            <img src={dataPlan.image} alt="" />
            <p>{dataPlan.name}</p>
          </style.LogoPaySubscrpition>
          <style.BenefitsPlan>
            <p>
              <span className="material-icons">list_alt</span> Benefícios:
            </p>
            <ol>
              {dataPlan.perks.map((element) => {
                return <li>{element.title}</li>;
              })}
            </ol>
          </style.BenefitsPlan>
          <style.PricePlan>
            <p>
              <img src={money} alt="" /> Preço:
            </p>
            <p> {dataPlan.price} Cobrados mensalmente</p>
          </style.PricePlan>
          <form onSubmit={showModal}>
            <style.InfosCardPay>
              <input
                type="text"
                placeholder="Nome impresso no cartão"
                onChange={(element) => setNameOnCard(element.target.value)}
              />
              <input
                type="text"
                placeholder="Digitos do cartão"
                onChange={(element) => setCardNumber(element.target.value)}
              />
            </style.InfosCardPay>
            <style.SecurityInfoCard>
              <input
                type="text"
                placeholder="Código de segurança"
                onChange={(element) => setSecurityCode(element.target.value)}
              />
              <input
                type="text"
                placeholder="Validade"
                onChange={(element) => setValidate(element.target.value)}
              />
            </style.SecurityInfoCard>
            <button type="submit">Assinar</button>
          </form>
        </style.MainPaySubscription>
      )}
    </>
  );
}
