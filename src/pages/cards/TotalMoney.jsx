import React from "react";
import { Link } from "react-router-dom";
import {
  useMoneyCounterByCatQuery,
  useRemoveCardsMutation,
} from "../../redux/features/apis/MoneyCounter";
import { ScaleLoader } from "react-spinners";
const TotalMoney = () => {
  const [removeCard] = useRemoveCardsMutation();
  const { data: cards, isLoading } = useMoneyCounterByCatQuery();
  return (
    <div className="flex justify-center gap-4 flex-wrap">
      {isLoading ? (
        <ScaleLoader />
      ) : (
        cards?.data.map((item) => (
          <div className="card" key={item._id}>
            <div className="item">
              <h3 className="uppercase">{item.cat}</h3>
              <p>$ {item.amount}</p>
            </div>
            <div>
              {/* <input type="text" placeholder='Add Cash' /> */}
              <div className="item">
                <span onClick={() => removeCard(item._id)} className="id">
                  ID: 989 707 921
                </span>
                <Link to={`/history/${item.cat}`} className="history-btn">
                  History
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TotalMoney;
