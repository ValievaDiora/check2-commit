import React from "react";
import s from "./index.module.css";
import Bridge from "./assets/bridge.svg";
import Flowers from "./assets/flowers.svg";
import Castle from "./assets/castle.svg";
import Pliers from "./assets/pliers.svg";

export default function Sales() {
  return (
    <div>
      <div className={s.sales}>
        <div className={s.salesHR}>
          <p className={s.salesText}>Sale</p>
          <hr className={s.salesLine}></hr>
          <button className={s.allSalesBtn}>All Sales</button>
        </div>

        <div className={s.salesContainer}>
          <div className={s.salesBridge}>
            <img className={s.bridgeImg} src={Bridge} alt="Bridge" />
            <p className={s.bridgeText}>Decorative forged bridge</p>
            <p className={s.bridgePrice}>$500</p>
          </div>
          <div className={s.salesFlowers}>
            <img className={s.flowersImg} src={Flowers} alt="Flowers" />
            <p className={s.flowersText}>Flower basket</p>
            <p className={s.flowersPrice}>$100</p>
          </div>
          <div className={s.salesCastle}>
            <img className={s.castleImg} src={Castle} alt="Castle" />
            <p className={s.castleText}>Aquarium lock</p>
            <p className={s.castlePrice}>$150</p>
          </div>
          <div className={s.salesPliers}>
            <img className={s.pliersImg} src={Pliers} alt="Pliers" />
            <p className={s.pliersText}>Secateurs</p>
            <p className={s.pliersPrice}>$199</p>
          </div>
        </div>
      </div>
    </div>
  );
}
