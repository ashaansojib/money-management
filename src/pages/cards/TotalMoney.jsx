import React from "react";
import { Link } from "react-router-dom";
import { useMoneyCounterByCatQuery } from "../../redux/features/apis/MoneyCounter";
const TotalMoney = () => {
  const { data: cost, isLoading } = useMoneyCounterByCatQuery("main-balance");
  return (
    <div className="card">
      <div className="item">
        <h3>Credit Balance</h3>
        <p>$ {isLoading ? "loading..." : cost?.data[0]?.amount}</p>
      </div>
      <div>
        {/* <input type="text" placeholder='Add Cash' /> */}
        <div className="item">
          <span className="id">ID: 989 707 921</span>
          <Link to={`/history/main-balance`} className="history-btn">
            History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalMoney;
