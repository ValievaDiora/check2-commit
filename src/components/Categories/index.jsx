import React from "react";
import s from "./index.module.css";
import Seeds from "./assets/seeds.svg";
import Sprout from "./assets/sprout.svg";
import Soil from "./assets/soil.svg";
import Rake from "./assets/rake.svg";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      <div className={s.categories}>
        <div className={s.allProductsSwitchMenu}>
          <button className={s.switchToMenu}>Main Page</button>
          <div className={s.switchHr}></div>
          <button className={s.stayAllProducts}>Categories</button>
        </div>

        <div className={s.categoriesHR}>
          <p className={s.categoriesText}>Categories</p>
          <hr className={s.categoriesLine}></hr>
          <Link to="/Categories" className={s.linkP}>
            <button className={s.allCategoriesBtn}>All Categories</button>
          </Link>
        </div>
        <div className={s.categoriesImgAndP}>
          <div className={s.categoriesImgAndP1}>
            <img className={s.categoriesImg} src={Seeds} alt="Image 1" />
            <p className={s.categoriesImgText}>Fertilizer</p>
          </div>

          <div className={s.categoriesImgAndP1}>
            <img className={s.categoriesImg} src={Sprout} alt="Image 2" />
            <p className={s.categoriesImgText}>
              Protective products and septic tanks
            </p>
          </div>

          <div className={s.categoriesImgAndP1}>
            <img className={s.categoriesImg} src={Soil} alt="Image 3" />
            <p className={s.categoriesImgText}>Planting material</p>
          </div>
          <div className={s.categoriesImgAndP1}>
            <img className={s.categoriesImg} src={Rake} alt="Image 4" />
            <p className={s.categoriesImgText}>Tools and equipment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
