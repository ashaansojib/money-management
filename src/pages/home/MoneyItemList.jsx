import React from "react";
import { ScaleLoader } from "react-spinners";
import { useAllMoneyItemsQuery, useRemoveMoneyItemMutation } from "../../redux/features/apis/MoneyManage";

const MoneyItemList = () => {
  const { data: moneyLists, isLoading } = useAllMoneyItemsQuery();
  const [removeMoneyItem] = useRemoveMoneyItemMutation();

  const handleRemoveItem = (id) => {
    removeMoneyItem(id);
  };
  return (
    <section className="overflow-x-auto bg-secondary">
      <table className="table text-white">
        {/* head */}
        <thead>
          <tr>
            <th>$Cost</th>
            <th>Status</th>
            <th>Mgs</th>
            <th>Action</th>
          </tr>
        </thead>
        {/* row 1 */}
        <tbody>
          {isLoading ? (
            <tr>
              <td>
                <ScaleLoader />
              </td>
            </tr>
          ) : (
            moneyLists?.data.map((item) => (
              <tr key={item._id}>
                <td>{item.amount}</td>
                <td>{item.cat}</td>
                <td>{item.info}</td>
                <td>
                  <button onClick={() => handleRemoveItem(item._id)}>
                    RMV
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  );
};

export default MoneyItemList;
