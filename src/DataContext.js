import React, { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const url = "http://localhost/Posts/Display.php";

    fetch(url)
      .then((response) => response.json())
      .then((data) => setInfo(data));
  }, []);

  return (
    <DataContext.Provider value={info}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };
