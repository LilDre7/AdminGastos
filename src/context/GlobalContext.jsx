import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import AppReducer from "./AppReducer";

export const Context = createContext();

export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    AppReducer,
    {
      transactions: [],
    },
    () => {
      const localData = localStorage.getItem("transactions");
      return localData
        ? { transactions: JSON.parse(localData) }
        : { transactions: [] };
    }
  );

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
    return () => {};
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <>
      <Context.Provider
        value={{
          transactions: state.transactions,
          addTransaction,
          deleteTransaction,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};
