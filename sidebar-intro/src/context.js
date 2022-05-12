import React,{useState,useContext} from 'react'

const AppContext = React.createContext();
const AppProvider = ({children}) => {
}
// custom hook
export const useGlobalContext =()=> {
  return useContext(AppContext)
}
export { AppContext, AppProvider}; 
