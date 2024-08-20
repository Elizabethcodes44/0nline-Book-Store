import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function SearchResults() {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Extract query parameters
    const queryParams = new URLSearchParams(location.search);
    const author = queryParams.get("author")?.toLowerCase() || "";
    const genre = queryParams.get("genre")?.toLowerCase() || "";
    const publisher = queryParams.get("publisher")?.toLowerCase() || "";

    // Fetch books based on search parameters
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        // Filter books based on search parameters
        const filteredBooks = data.Books.filter((book) => {
          return (
            (author === "" || book.author.toLowerCase().includes(author)) &&
            (genre === "" || book.genre.toLowerCase().includes(genre)) &&
            (publisher === "" ||
              book.publisher.toLowerCase().includes(publisher))
          );
        });
        setBooks(filteredBooks);
      });
  }, [location.search]);

  return (
    <>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {books.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {books.map((book) => (
            <li key={book.id} className="book-item border p-4 rounded-md shadow-md">
                 <img
                src={book.cover_image}
                alt={`${book.title} cover`}
                className="w-full h-60 object-cover mb-2"
              />
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Publisher: {book.publisher}</p>
            </li>
        
          ))}
         
        </ul>
       
      ) : (
        <p className="mt-10 text-3xl mx-5">No results found.</p>
      )}
    </div>
    </>
  );
}
