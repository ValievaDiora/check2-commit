import React from "react";
import s from "./index.module.css";
import Hands from "./assets/hands.svg";

export default function GetDiscount() {
  return (
    <div>
      <div className={s.getDiscount}>
        <h1 className={s.getDiscountH1}>5% off on the first order</h1>
        <div className={s.getDiscountContent}>
          <div className={s.getDiscountImg}>
            <img src={Hands} alt="Hands" />
          </div>
          <div className={s.getDiscountBtns}>
            <input className={s.getDiscountNameBtn} placeholder="Name"></input>
            <input
              className={s.getDiscountPhoneBtn}
              placeholder="Phone Number"
            ></input>
            <input
              className={s.getDiscountEmailBtn}
              placeholder="Email"
            ></input>

            <button className={s.getDiscountBtn}>Get a Discount</button>
          </div>
        </div>
      </div>
    </div>
  );
}
