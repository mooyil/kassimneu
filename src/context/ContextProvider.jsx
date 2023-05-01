import { createContext, useState } from "react";
import React from "react";

export const MyContext = createContext();

export function ContextProvider(props) {
  const [translate, setTranslate] = useState();

  return (
    <MyContext.Provider value={{ translate, setTranslate }}>
      {props.children}
    </MyContext.Provider>
  );
}
