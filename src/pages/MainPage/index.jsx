import React from "react";
import Discount from "../../components/Discount";
import Categories from "../../components/Categories";
import GetDiscount from "../../components/GetDiscount";
import Sales from "../../components/Sales";

export default function MainPage() {
  return (
    <div>
      <Discount />

      <Categories />

      <GetDiscount />

      <Sales />
    </div>
  );
}
