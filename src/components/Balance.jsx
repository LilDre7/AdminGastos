import { useGlobalState } from "../context/GlobalContext";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  return (
    <div className="flex justify-between p-2">
      <h3>Your Balance</h3>
      <h1 className="text-2xl font-bold"> ${total} </h1>
    </div>
  );
};

export default Balance;
