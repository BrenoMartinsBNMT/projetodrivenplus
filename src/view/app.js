import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "../../src/components/context/context";
import { useState } from "react";
import SignUp from "./Sign-up";
import Subscription from "./subscriptions";
import PaySubscription from "./PaySubscription";

export default function App() {
  let [tokenLogin, setTokenLogin] = useState("");
  let [planChoosed, setPlanChoosed] = useState("");
  let [subChoose, setSubChoose] = useState("");
  return (
    <UserContext.Provider
      value={{
        tokenLogin,
        setTokenLogin,
        planChoosed,
        setPlanChoosed,
        subChoose,
        setSubChoose,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="subscription/:idPlan" element={<PaySubscription />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
