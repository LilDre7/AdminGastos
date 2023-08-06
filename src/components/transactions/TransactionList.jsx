import { useGlobalState } from "../../context/GlobalContext";
import { TransactionItem } from "../transactions/TransactionItem";

const TransactionList = () => {
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-black text-2xl font-bold w-full text-center ">
        History
      </h3>
      <ul className="">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
        {transactions.length === 0 && (
          <p className=" text-bas text-gray-500 w-full border-b-4 border-red-600 p-2 ">
            There is no history on this expense tracker
          </p>
        )}
      </ul>
    </>
  );
};

export default TransactionList;
