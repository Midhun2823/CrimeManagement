import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [token, setToken] = useState("");
  const [userdetails, setUserDetails] = useState("");
  const contextValue = { url, token, setToken, userdetails };

  useEffect(() => {
    // why we are adding is clearly explained in this function definetion
    async function loadData() {
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token")); // when the token is avaiable we will set the token in this state so by this if we reload the page also we can access the same token

        const myObject = JSON.parse(localStorage.getItem("user"));
        setUserDetails(myObject);
      }
    }
    loadData();
  }, []);

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
