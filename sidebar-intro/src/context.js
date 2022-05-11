import React,{useState,useContext} from 'react'

const AppContext = React.createContext();
export{AppContext}

// custom hook
export const useGlobalContext =()=> {
  return useContext(AppContext)
}
export { AppContext}; 
