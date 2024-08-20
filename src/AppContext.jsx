import  { createContext, useState, useContext } from 'react';
// Create a new context called 'AppContext'
const AppContext = createContext();
// Define the AppProvider component, which will wrap around the part of the app that needs access to the context
export default function AppProvider({ children }){
  // Define state variables for wishlistCount and cartCount, with initial values set to 0
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  // Return a context provider that passes down the state variables and their setter functions

  return (
    <AppContext.Provider value={{ wishlistCount, setWishlistCount, cartCount, setCartCount }}>
      {children}
    </AppContext.Provider>
  );
};
// Export a custom hook that allows easy access to the context values
export const useAppContext = () => useContext(AppContext);
