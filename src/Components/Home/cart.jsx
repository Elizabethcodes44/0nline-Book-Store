import { useEffect, useState } from "react";
import { useAppContext } from "../../AppContext";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const { cartCount, setCartCount } = useAppContext(); // Access cartCount from context

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
    console.log(savedCartItems);
    // Update cart count in context if needed
    setCartCount(savedCartItems.length);
  }, [setCartCount]);
  const handleRemoveItem = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index); // Remove the item at the specified index
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
    setCartCount(updatedCartItems.length); // Update cart count
  };

  // Function to increase the quantity of an item
  const handleAddQuantity = (index) => {
    const updatedCartItems = cartItems.map((item, i) => 
      i === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
  };

  // Function to decrease the quantity of an item
  const handleDeductQuantity = (index) => {
    const updatedCartItems = cartItems.map((item, i) => 
      i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update localStorage
    };
  

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
             
              <p className="text-gray-700 mb-2"> Author: {item.author}</p>
              <p className="text-gray-700 mb-2">Genre: {item.genre}</p>
              <p className="text-gray-700 mb-2">Category: {item.category}</p>
              <div className="flex justify-between items-center  mx-5">
              <button
                  onClick={() => handleDeductQuantity(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  -
                </button>
                <span className="text-brown">{item.quantity}</span>
                <button
                  onClick={() => handleAddQuantity(index)}
                  className="bg-green-500 text-brown px-2 py-1 rounded"
                >
                  +
                </button>
              </div>
              <button className="mt-4 bg-brown ml-4 text-white px-4 py-2 rounded ">CHECKOUT</button>
              <button
                onClick={() => handleRemoveItem(index)}
                className="mt-4 bg-brown ml-4 text-white px-4 py-2  rounded"
              >
                DELETE ITEM
              </button>
             
            </div>
          ))}
        </div>
      ) : (
        <p>No items in your cart.</p>
      )}
    </div>
  );
}
