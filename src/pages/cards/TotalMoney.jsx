import React from "react";
import { Link } from "react-router-dom";
import {
  useMoneyCounterByCatQuery,
  useRemoveCardsMutation,
} from "../../redux/features/apis/MoneyCounter";
import { ScaleLoader } from "react-spinners";
import { useForm } from "react-hook-form";
const TotalMoney = () => {
  const [removeCard] = useRemoveCardsMutation();
  const { data: cards, isLoading } = useMoneyCounterByCatQuery();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };
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
              <div className="item">
                <span onClick={() => removeCard(item._id)} className="id">
                  ID: 989 707 921
                </span>
                <Link to={`/history/${item.cat}`} className="history-btn">
                  History
                </Link>
              </div>
              {/* <form onSubmit={handleSubmit(onSubmit)} className="flex justify-between gap-2 items-center">
                <input
                  type="number"
                  {...register("amount", {
                    required: true,
                    valueAsNumber: true,
                  })}
                  placeholder="Cash Amount"
                />
                <input
                  type="submit"
                  value="X"
                  className="bg-red-500 mt-2 cursor-pointer px-1"
                />
              </form> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TotalMoney;
