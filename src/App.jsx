// ** Importaciones de estilos ** //
import "./App.css";

import JSConfetti from "js-confetti";

// ** Importaciones de componentes ** //
import Header from "./components/Header";
import Balance from "./components/Balance";

// ** Importaciones de componentes de transaction ** //

// ** Importaciones de **  //
import { GlobalProvider } from "./context/GlobalContext";
import TransactionForm from "./components/transactions/TransactionForm";
import TransactionList from "./components/transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";
import ExpenseChat from "./components/ExpenseChat";
import Menu from "./components/Menu";

function App() {
  const jsConfetti = new JSConfetti();

  jsConfetti.addConfetti({
    emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
  });

  return (
    <>
      <GlobalProvider>
        <div className=" h-full items-center p-3 pt-16 bg-[#09090b] ">
          <div className="bg-white rounded-lg shadow-md text-black p-3 ">
            <div className="">
              <div className="">
                <Menu />
                {/* <Header /> */}
                <h1 className="text-2xl font-bold text-center text-gray-700 bg-white rounded-lg shadow-md ">
                  Expense Tracker
                </h1>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="">
                <ExpenseChat />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
