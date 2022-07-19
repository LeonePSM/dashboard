import React, { createContext, useContext, useState} from 'react';

const StateContext =createContext();

const initialState = {
    chart: false,
    cart: false,
    useProfile: false,
    notificatiion: false,  
}

export const ContextProvider= ({children}) => {
    const [activeMenu, setactiveMenu] = useState(true);
    

return (
    <StateContext.Provider 
     value={{ 
        activeMenu,
        setActiveMenu,
        }}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext (StateContext);