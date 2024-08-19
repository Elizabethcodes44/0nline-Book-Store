import  { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export default function AppProvider({ children }){
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  return (
    <AppContext.Provider value={{ wishlistCount, setWishlistCount, cartCount, setCartCount }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
