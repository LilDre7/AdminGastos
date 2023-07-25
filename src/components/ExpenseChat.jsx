import React from "react";
import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalContext";

const ExpenseChat = () => {
  const { transactions } = useGlobalState();

  const total = transactions.reduce(
    (acc, transaction) => (acc += transaction.amount),
    0
  );

  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);

  const totalExpense =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

  const totalExpensePercent = Math.round((totalExpense / totalIncome) * 100);

  return (
    <div>
      <VictoryPie
        colorScale={["tomato", "orange"]}
        data={[
          { x: "Expenses", y: 35 },
          { x: "Income", y: 40 },
        ]}
        animate={{ duration: 2000 }}
        innerRadius={50}
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
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
};

export default ExpenseChat;
