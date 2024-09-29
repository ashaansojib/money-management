import React from "react";
import { Link } from "react-router-dom";
import { useMoneyCounterByCatQuery } from "../../redux/features/apis/MoneyCounter";

const FamilyCost = () => {
  const { data: cost, isLoading } = useMoneyCounterByCatQuery("main-balance");
  return (
    <div className="card">
      <div className="item">
        <h3>Family Cost</h3>
        <p>$ {isLoading ? "loading..." : cost?.data[0]?.amount}</p>
      </div>
      <div>
        {/* <input type="text" placeholder='Add Cash' /> */}
        <div className="item">
          <span className="id">ID: 989 707 921</span>
          {/* <button className="history-btn">History</button> */}
          <Link to={`/history/family-cost`} className="history-btn">History</Link>
        </div>
      </div>
    </div>
  );
};

export default FamilyCost;
