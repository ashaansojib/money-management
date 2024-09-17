import React from "react";
import { Link } from "react-router-dom";

const OutsideIncome = () => {
  
  return (
    <div className="card">
      <div className="item">
        <h3>Extra Income</h3>
        <p>$45,000</p>
      </div>
      <div>
        {/* <input type="text" placeholder='Add Cash' /> */}
        <div className="item">
          <span className="id">ID: 989 707 921</span>
          <Link to={`/history/extra-income`} className="history-btn">
            History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OutsideIncome;
