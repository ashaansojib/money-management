import React from "react";
import { Link } from "react-router-dom";

const FamilyCost = () => {
  return (
    <div className="card">
      <div className="item">
        <h3>Family Cost</h3>
        <p>$45,000</p>
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
