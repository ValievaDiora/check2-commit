import React from "react";
import s from "./index.module.css";
import MainBanner from "./assets/main.svg";

export default function Discount() {
  return (
    <div>
      <div className={s.discount}>
        <img className={s.discountImg} src={MainBanner} alt="MainImg" />
        <div className={s.discountTextAndBtn}>
          <p className={s.discountText}>
            Amazing Discounts on Garden Products!
          </p>
          <button className={s.discountBtn}>Check Out</button>
        </div>
      </div>
    </div>
  );
}
