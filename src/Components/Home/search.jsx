import bgImage from "../../assets/landingpage.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publisher, setPublisher] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Create a query object based on non-empty search inputs
    const query = {};

    if (author) query.author = author;
    if (genre) query.genre = genre;
    if (publisher) query.publisher = publisher;

    // Convert the query object to a query string
    const queryString = new URLSearchParams(query).toString();

    // Navigate to the search results page with the query string
    navigate(`/search-results?${queryString}`);
  };
  return (
    <div
      className=" bg-cover  h-screen flex items-center justify-center gap-2"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <input
        placeholder="SEARCH BY AUTHORS NAME"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="rounded-full bg-brown shadow border-white border-2 p-4"
      />
      <input
        className="rounded-full bg-brown shadow border-white border-2 p-4"
        value={genre}
                onChange={(e) => setGenre(e.target.value)}
        placeholder="SEARCH BY GENRE"
      />
      <input
        className="rounded-full bg-brown shadow border-white border-2 p-4"
        value={publisher}
                onChange={(e) => setPublisher(e.target.value)}
        placeholder="SEARCH BY PUBLISHER"
      />
      <button 
       onClick={handleSearch}className="rounded-full bg-green-600 shadow text-white font-[20px] p-4">
        SEARCH
      </button>
    </div>
  );
}
