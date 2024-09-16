import { Select } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAddMoneyItemMutation } from "../../routes/features/apis/MoneyManage";

const AddMoney = () => {
  const [addMoneyItem] = useAddMoneyItemMutation();
  const [cat, setCat] = useState("main-balance");
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    data.cat = cat;
    await addMoneyItem(data);
    reset();
  };
  const selectCategory = (e) => {
    setCat(e.target.value);
  };
  return (
    <div className="bg-secondary p-4">
      <h3>Which Money Want to Add?</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("amount", { required: true })}
          placeholder="Cash Amount"
        />
        <input
          type="text"
          {...register("info", { required: true })}
          placeholder="Description"
        />
        {/* <input type="text" placeholder="Category" /> */}
        {/* select category */}
        <Select
          onChange={selectCategory}
          className="inline-block w-full mt-2 bg-secondary border text-white"
          aria-label="Project status"
        >
          <option value="main-balance">Main Balance</option>
          <option value="shop-income">Shop Income</option>
          <option value="extra-income">Extra Income</option>
          <option value="rent-credit">Rent Credit</option>
          <option value="family-cost">Family Cost</option>
          <option value="peresonal-cost">Personal Cost</option>
        </Select>
        <input
          type="submit"
          value="Add Cash"
          className="bg-slate-50 px-2 font-semibold mt-2 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default AddMoney;
