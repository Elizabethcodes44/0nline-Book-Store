import { useState, useEffect } from "react";

export default function Trending() {
  const [trendingBooks, setTrendingBooks] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTrendingBooks(data.Books);
      })
      .catch((error) => console.error("Fetch trending books error: ", error));
  }, []);
  return (
    <div>
      {Array.isArray(trendingBooks) &&
        trendingBooks.map((book, index) => (
            book.trending ? (
                <div key={index} className="book-item">
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <img src={book.cover_image} alt={`${book.title} cover`} />
                  <p>{book.plot_summary}</p>
                  <button>Add to cart</button>
                </div>
              ) : null // Render nothing if the book is not trending
        ))}
    </div>
  );
}
