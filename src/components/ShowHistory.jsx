import moment from "moment";
import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const ShowHistory = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleBackward =() =>{
    navigate("/")
  }
  return (
    <section className="bg-secondary p-4 text-white">
      <h2 className="font-semibold italic pb-2">
        <svg
        onClick={handleBackward}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 inline cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
        Show History of Costing...
      </h2>
      <div>
        {data?.data.map((item, i) => (
          <div
            key={item._id}
            className="border px-2 mb-2 py-4 flex justify-between items-center"
          >
            <p>{i + 1}</p>
            <h3 className="font-bold text-orange-500">{item.amount} TK</h3>
            <p>{item.info}</p>
            <p>{moment(item.createdAt).format('DD MMMM, YYYY')}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowHistory;
