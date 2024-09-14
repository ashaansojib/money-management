import React from "react";
import HistoryModal from "../../components/HistoryModal";

const OutsideIncome = () => {
  const history = [
    {
      "name": "Show different content",
      "id": "1231231"
    }
  ]
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
          
          <button onClick={() => document.getElementById("my_modal_1").showModal()} className="history-btn">History</button>
          { 
            history?.map( (item) => <HistoryModal key={item.id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
};

export default OutsideIncome;
