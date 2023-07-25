import React, { useState } from "react";
import { useGlobalState } from "../../context/GlobalContext";

const TransactionForm = () => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const { addTransaction } = useGlobalState();

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID().slice(0, 3),
      amount: +amount,
      description,
    });
    console.log(amount, description);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a Description"
          onChange={handleDescription}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          placeholder="Enter a amount"
          step={0.01}
          onChange={handleAmount}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block w-full mb-2 hover:bg-indigo-800 transition-all duration-300 ease-in-out">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default TransactionForm;
