import React from "react";
import Logo from "../components/NavBar/assets/logo.svg";
import stylesNavBar from "../components/NavBar/index.module.css";
import Logo2 from "../components/NavBar/assets/basket=empty.svg";
import stylesDiscount from "../components/Discount/index.module.css";
import MainImg from "../components/Discount/assets/main.svg";
import stylesCategories from "../components/Categories/index.module.css";
import Seeds from "../components/Categories/assets/seeds.svg";
import Sprout from "../components/Categories/assets/sprout.svg";
import Soil from "../components/Categories/assets/soil.svg";
import Rake from "../components/Categories/assets/rake.svg";
import stylesGetDiscount from "../components/GetDiscount/index.module.css";
import Hands from "../components/GetDiscount/assets/hands.svg";
import stylesSales from "../components/Sales/index.module.css";
import Bridge from "../components/Sales/assets/bridge.svg";
import Flowers from "../components/Sales/assets/flowers.svg";
import Castle from "../components/Sales/assets/castle.svg";
import Pliers from "../components/Sales/assets/pliers.svg";
import stylesContact from "../components/Contact/index.module.css";
import Instagram from "../components/Contact/assets/instagram.svg";
import WhatsApp from "../components/Contact/assets/whatsapp.svg";
import Map from "../components/Contact/assets/map.svg";

export default function Header() {
  return (
    <div>
      <div className={stylesNavBar.header}>
        <img src={Logo} className={stylesNavBar.logo} alt="logo" />
        <div className={stylesNavBar.headerMenu}>
          <p className={stylesNavBar.headerMenuP}>Main Page</p>
          <p className={stylesNavBar.headerMenuP}>Categories</p>
          <p className={stylesNavBar.headerMenuP}>All Products</p>
          <p className={stylesNavBar.headerMenuP}>All Sales</p>
        </div>
        <img src={Logo2} className={stylesNavBar.headerBasket} alt="Basket" />
      </div>
      {/* DISCOUNT DIV */}
      <div className={stylesDiscount.discount}>
        <img
          className={stylesDiscount.discountImg}
          src={MainImg}
          alt="MainImg"
        />
        <div className={stylesDiscount.discountTextAndBtn}>
          <p className={stylesDiscount.discountText}>
            Amazing Discounts on Garden Products!
          </p>
          <button className={stylesDiscount.discountBtn}>Check Out</button>
        </div>
      </div>

      {/* CATEGORIES DIV */}

      <div className={stylesCategories.categories}>
        <div className={stylesCategories.categoriesHR}>
          <p className={stylesCategories.categoriesText}>Categories</p>
          <hr className={stylesCategories.categoriesLine}></hr>
          <button className={stylesCategories.allCategoriesBtn}>
            All Categories
          </button>
        </div>
        <div className={stylesCategories.categoriesImgAndP}>
          <div className={stylesCategories.categoriesImgAndP1}>
            <img
              className={stylesCategories.categoriesImg}
              src={Seeds}
              alt="Image 1"
            />
            <p className={stylesCategories.categoriesImgText}>Fertilizer</p>
          </div>

          <div className={stylesCategories.categoriesImgAndP1}>
            <img
              className={stylesCategories.categoriesImg}
              src={Sprout}
              alt="Image 2"
            />
            <p className={stylesCategories.categoriesImgText}>
              Protective products and septic tanks
            </p>
          </div>

          <div className={stylesCategories.categoriesImgAndP1}>
            <img
              className={stylesCategories.categoriesImg}
              src={Soil}
              alt="Image 3"
            />
            <p className={stylesCategories.categoriesImgText}>
              Planting material
            </p>
          </div>
          <div className={stylesCategories.categoriesImgAndP1}>
            <img
              className={stylesCategories.categoriesImg}
              src={Rake}
              alt="Image 4"
            />
            <p className={stylesCategories.categoriesImgText}>
              Tools and equipment
            </p>
          </div>
        </div>
      </div>

      {/* GET DISCOUNT DIV */}

      <div className={stylesGetDiscount.getDiscount}>
        <h1 className={stylesGetDiscount.getDiscountH1}>
          5% off on the first order
        </h1>
        <div className={stylesGetDiscount.getDiscountContent}>
          <div className={stylesGetDiscount.getDiscountImg}>
            <img src={Hands} alt="Hands" />
          </div>
          <div className={stylesGetDiscount.getDiscountBtns}>
            <input
              className={stylesGetDiscount.getDiscountNameBtn}
              placeholder="Name"
            ></input>
            <input
              className={stylesGetDiscount.getDiscountPhoneBtn}
              placeholder="Phone Number"
            ></input>
            <input
              className={stylesGetDiscount.getDiscountEmailBtn}
              placeholder="Email"
            ></input>

            <button className={stylesGetDiscount.getDiscountBtn}>
              Get a Discount
            </button>
          </div>
        </div>
      </div>

      {/*  SALES DIV */}

      <div className={stylesSales.sales}>
        <div className={stylesSales.salesHR}>
          <p className={stylesSales.salesText}>Sale</p>
          <hr className={stylesSales.salesLine}></hr>
          <button className={stylesSales.allSalesBtn}>All Sales</button>
        </div>

        <div className={stylesSales.salesContainer}>
          <div className={stylesSales.salesBridge}>
            <img className={stylesSales.bridgeImg} src={Bridge} alt="Bridge" />
            <p className={stylesSales.bridgeText}>Decorative forged bridge</p>
            <p className={stylesSales.bridgePrice}>$500</p>
          </div>
          <div className={stylesSales.salesFlowers}>
            <img
              className={stylesSales.flowersImg}
              src={Flowers}
              alt="Flowers"
            />
            <p className={stylesSales.flowersText}>Flower basket</p>
            <p className={stylesSales.flowersPrice}>$100</p>
          </div>
          <div className={stylesSales.salesCastle}>
            <img className={stylesSales.castleImg} src={Castle} alt="Castle" />
            <p className={stylesSales.castleText}>Aquarium lock</p>
            <p className={stylesSales.castlePrice}>$150</p>
          </div>
          <div className={stylesSales.salesPliers}>
            <img className={stylesSales.pliersImg} src={Pliers} alt="Pliers" />
            <p className={stylesSales.pliersText}>Secateurs</p>
            <p className={stylesSales.pliersPrice}>$199</p>
          </div>
        </div>
      </div>

      {/* CONTACT DIV */}

      <div className={stylesContact.contact}>
        <div className={stylesContact.contactH1}>
          <h1 className={stylesContact.contactH1Text}>Contact</h1>
        </div>
        <div className={stylesContact.contactInfo}>
          <div className={stylesContact.contactPhone}>
            <p className={stylesContact.contactText}>Phone</p>
            <p className={stylesContact.contactNumber}>+49 999 999 99 99</p>
          </div>

          <div className={stylesContact.contactSocials}>
            <p className={stylesContact.socialsText}>Socials</p>
            <img src={Instagram} alt="Instagram" />
            <img src={WhatsApp} alt="WhatsApp" />
          </div>

          <div className={stylesContact.contactAddress}>
            <p className={stylesContact.addressText}>Address</p>
            <p className={stylesContact.addressName}>
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </p>
          </div>

          <div className={stylesContact.contactHours}>
            <p className={stylesContact.hoursText}>Working Hours</p>
            <p className={stylesContact.hoursName}>
              Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
            </p>
          </div>

          <div className={stylesContact.map}>
            <div className={stylesContact.mapImg}>
              <img className={stylesContact.mapImg1} src={Map} alt="Map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
