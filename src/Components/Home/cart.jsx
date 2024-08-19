import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { cartCount, setCartCount } = useAppContext(); // Access cartCount from context

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);

    // Update cart count in context if needed
    setCartCount(savedCartItems.length);
  }, [setCartCount]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <p className="mb-4">Total Items: {cartCount}</p>
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {cartItems.map((item, index) => (
            <div key={index} className="book-item border p-4 rounded-md shadow-md">
              <img
                src={item.cover_image}
                alt={`${item.title} cover`}
                className="w-full h-60 object-cover mb-2"
              />
              <h2 className="text-xl font-bold mb-1">{item.title}</h2>
              <p className="text-gray-700 mb-2">{item.author}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items in your cart.</p>
      )}
    </div>
  );
}
