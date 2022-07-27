import React,{useState,useContext} from 'react'

const AppContext = React.createContext();
const AppProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalbarOpen] = useState(false);

   const OpenSidebar = () => {
     setIsSidebarOpen(true);
   };

   const closeSidebar = () => {
     setIsSidebarOpen(false);
   };

  return <AppContext.Provider value="hello">{children}</AppContext.Provider>;
}
// custom hook
export const useGlobalContext =()=> {
  return useContext(AppContext)
}
export { AppContext, AppProvider}; 
