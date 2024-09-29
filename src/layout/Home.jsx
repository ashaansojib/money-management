import React from "react";
import TotalMoney from "../pages/cards/TotalMoney";
import { useMoneyCounterByCatQuery } from "../redux/features/apis/MoneyCounter";
import AddMoney from "../pages/home/AddMoney";
import MoneyItemList from "../pages/home/MoneyItemList";

const Home = () => {
  const { data: balance, isLoading } = useMoneyCounterByCatQuery();
  return (
    <>
      <p className="text-xl text-white">
        My Intotal Income from 29.09.2024 : ${" "}
        {/* {isLoading ? "loading..." : balance?.data[0]?.amount} */}
      </p>
      <div className="space-y-2">
        <TotalMoney />
        <AddMoney />
        <MoneyItemList />
      </div>
    </>
  );
};

export default Home;
