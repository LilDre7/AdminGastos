import { useGlobalState } from "../../context/GlobalContext";

export const TransactionItem = ({ transaction }) => {
  const { deleteTransaction } = useGlobalState();

  return (
    <>
      <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center ">
        <p className="text-sm font-bold capitalize text-gray-300 mr-2">
          {transaction.description}
        </p>
        <div className="flex gap-4">
          <span> ${transaction.amount} </span>
          <button onClick={() => deleteTransaction(transaction.id)}>
            Delete ❌
          </button>
        </div>
      </li>
    </>
  );
};

export default TransactionItem;
