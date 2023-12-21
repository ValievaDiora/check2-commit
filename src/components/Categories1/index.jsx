import React from "react";
import s from "./index.module.css";
import bridge from "./assets/bridge.svg";
import bucket from "./assets/bucket.svg";
import castle from "./assets/castle.svg";
import flowers from "./assets/flowers.svg";
import gloves from "./assets/gloves.svg";
import pliers from "./assets/pliers.svg";
import rope from "./assets/rope.svg";
import saw from "./assets/saw.svg";
import shovel from "./assets/shovel.svg";
import thermometer from "./assets/thermometer.svg";
import trident from "./assets/trident.svg";
import { Link } from "react-router-dom";

export default function AllProducts() {
  return (
    <div>
      <div className={s.allProducts}>
        <div className={s.allProductsSwitchMenu}>
          <Link to="/" className={s.linkP}>
            <button className={s.switchToMenu}>Main Page</button>
          </Link>
          <div className={s.switchHr}></div>
          <button className={s.stayAllProducts}>All Products</button>
        </div>

        <div className={s.allProductsFilter}>
          <p className={s.allProductsText}>All Products</p>

          <div className={s.allProductsContainers}>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={bridge} alt="Img" />
              <p className={s.allProductsP}>Decorative forged bridge</p>
              <p className={s.allProductsPrice}>$500</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={bucket} alt="Img" />
              <p className={s.allProductsP}>Collection for berries (plastic)</p>
              <p className={s.allProductsPrice}>$26</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={castle} alt="Img" />
              <p className={s.allProductsP}>Aquarium lock (black)</p>
              <p className={s.allProductsPrice}>$150</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={flowers} alt="Img" />
              <p className={s.allProductsP}>Flower basket</p>
              <p className={s.allProductsPrice}>$100</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={gloves} alt="Img" />
              <p className={s.allProductsP}>Gloves (black)</p>
              <p className={s.allProductsPrice}>$9</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={pliers} alt="Img" />
              <p className={s.allProductsP}>Secateurs</p>
              <p className={s.allProductsPrice}>$199</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={rope} alt="Img" />
              <p className={s.allProductsP}>Barbell</p>
              <p className={s.allProductsPrice}>$12</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={saw} alt="Img" />
              <p className={s.allProductsP}>Sickle-shaped hacksaw</p>
              <p className={s.allProductsPrice}>$155</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={shovel} alt="Img" />
              <p className={s.allProductsP}>Bayonet shovel</p>
              <p className={s.allProductsPrice}>$180</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={thermometer} alt="Img" />
              <p className={s.allProductsP}>Souvenir thermometer</p>
              <p className={s.allProductsPrice}>$98</p>
            </div>
            <div className={s.allProductsD}>
              <img className={s.allProductsImg} src={trident} alt="Img" />
              <p className={s.allProductsP}>Garden pitchfork</p>
              <p className={s.allProductsPrice}>$179</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
