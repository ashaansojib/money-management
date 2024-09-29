import React from "react";
import { Link } from "react-router-dom";
import { useMoneyCounterByCatQuery } from "../../redux/features/apis/MoneyCounter";

const ShopIncome = () => {
  const { data: cost, isLoading } = useMoneyCounterByCatQuery("shop-income");
  return (
    <div className="card">
      <div className="item">
        <h3>Shop Income</h3>
        <p>$ {isLoading ? "loading..." : cost?.data[0]?.amount}</p>
      </div>
      <div>
        {/* <input type="text" placeholder='Add Cash' /> */}
        <div className="item">
          <span className="id">ID: 989 707 921</span>{" "}
          <Link to={`/history/shop-income`} className="history-btn">
            History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopIncome;
