// ** Importaciones de estilos ** //
import "./App.css";

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

function App() {
  return (
    <>
      <GlobalProvider>
        <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
          <div className="container mx-auto w-3/6 ">
            <div className="bg-zinc-800 p-10 rounded-md flex gap-x-2 ">
              <div className="">
                {/* <Header /> */}
                <h1 className="text-4xl font-bold mb-3 text-white bg-zinc-800 pb-2 rounded-md shadow-md shadow-zinc-800/50  ">
                  Expense Tracker
                </h1>
                <IncomeExpenses />
                <Balance />
                <TransactionForm />
              </div>
              <div className="w-full flex flex-col flex-1">
                <TransactionList />
                <ExpenseChat />
              </div>
            </div>
          </div>
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
