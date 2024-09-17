import React from "react";
import { Link } from "react-router-dom";
const PersonalCost = () => {
  
  return (
    <div className="card">
      <div className="item">
        <h3>Personal Cost</h3>
        <p>$45,000</p>
      </div>
      <div>
        {/* <input type="text" placeholder='Add Cash' /> */}
        <div className="item">
          <span className="id">ID: 989 707 921</span>
          <Link to={`/history/personal-cost`} className="history-btn">
            History
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PersonalCost;
