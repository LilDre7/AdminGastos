import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalContext";
// import { BsPieChartFill } from "react-icons/bs";

function ExpenseChat() {
  const { transactions } = useGlobalState();

  const totalIncomes = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  console.log({
    totalIncomes,
    totalExpenses,
  });

  const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
  const incomesPercentage = 100 - expensesPercentage;

  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
      <div className="flex justify-center p-3 bg-black m-3 text-white border-4 border-red-500 rounded-md">
        <div className="">
          <h1 className=" font-bold ">No data yet</h1>
          <p className="font-semibold text-sm mt-2 mb-2 text-gray-400 ">
            Add some transactions to see the chart
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <VictoryPie
        colorScale={["#e74c3c", "#2ecc71"]}
        data={[
          { x: "Expenses", y: expensesPercentage },
          { x: "Incomes", y: incomesPercentage },
        ]}
        animate={{
          duration: 2000,
        }}
        labels={({ datum }) => datum.y}
        labelComponent={
          <VictoryLabel
            angle={45}
            style={{
              fill: "white",
            }}
          />
        }
      />
    </div>
  );
}

export default ExpenseChat;
