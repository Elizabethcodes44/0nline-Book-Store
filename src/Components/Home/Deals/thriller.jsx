import { useState, useEffect } from "react";
import love from "../../../assets/wishlist.png";
import { useAppContext } from "../../../AppContext";
export default function Thriller() {
  const [deals, setDeals] = useState([]);
  const [hasBooks, setHasBooks] = useState(false);

  const [expandedBook, setExpandedBook] = useState(null);
  const { setWishlistCount, setCartCount } = useAppContext();
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredBooks = data.Books.filter(
          (book) => book.best_seller && book.genre === "thriller"
        );
        setDeals(filteredBooks);
        setHasBooks(filteredBooks.length > 0);
      })
      .catch((error) => console.error("Fetch deals error: ", error));
  }, []);

  const handleReadMore = (index) => {
    setExpandedBook(expandedBook === index ? null : index);
  };

  const handleAddToWishlist = () => {
    setWishlistCount(prevCount => {
      console.log("Wishlist count before:", prevCount);
      const newCount = prevCount + 1;
      console.log("Wishlist count after:", newCount);
      return newCount;
    });
  };
  const handleAddToCart = (book) => {
    try {
      // Check if the book has the necessary properties
      const { id, title, author, cover_image, price, genre, rating, plot_summary } = book;

      if (!id || !title || !author || !cover_image || !rating || !genre || !price || !plot_summary) {
        console.error('Book is missing essential properties:', book);
        return;
      }
       // Create a bookToStore object with necessary properties
    const bookToStore = { id, title, author, cover_image, price, genre, rating, plot_summary, quantity: 1 };

    // Get existing cart items or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log(existingCart);

    // Check if the book is already in the cart
    const bookIndex = existingCart.findIndex(item => item.id === bookToStore.id);
    if (bookIndex !== -1) {
      // If already in the cart, update the quantity
      existingCart[bookIndex].quantity += 1;
    } else {
      // If not in the cart, add the new book
      existingCart.push(bookToStore);
    }

    // Store the updated cart back in localStorage
    localStorage.setItem('cartItems', JSON.stringify(existingCart));

    // Update cart count in context
    setCartCount(prevCount => prevCount + 1);
  } catch (error) {
    console.error('Error updating cart:', error);
  }
};

 
  
  return (
    <div className="p-4">
      {hasBooks ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {deals.map((book, index) => (
            <div
              key={index}
              className="book-item border p-4 rounded-md shadow-md "
            >
              <img
                src={book.cover_image}
                alt={`${book.title} cover`}
                className="w-full h-60 object-cover mb-2"
              />
              <h2 className="text-xl font-bold mb-1">{book.title}</h2>
              <p className="text-gray-700 mb-2">{book.author}</p>

              {expandedBook === index ? (
                <>
                  <p className="text-gray-600">{book.plot_summary}</p>
                  <button
                    onClick={() => handleReadMore(index)}
                    className="text-blue-500 underline mt-2"
                  >
                    Show Less
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleReadMore(index)}
                  className="text-blue-500 underline"
                >
                  Read More
                </button>
              )}

              <div className="mt-2 flex items-center">
                <img
                  src={love}
                  alt="Wishlist Icon"
                  className="w-8 h-8 cursor-pointer mr-4"
                  onClick={handleAddToWishlist}
                />
                <button
                  className="bg-brown text-white py-2 px-4 rounded"
                  onClick={() => handleAddToCart(book)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No trending books currently available for this genre</p>
      )}
    </div>
  );
}
