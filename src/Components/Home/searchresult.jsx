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
    <div>
      <h1>Search Results</h1>
      {books.length > 0 ? (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Genre: {book.genre}</p>
              <p>Publisher: {book.publisher}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
