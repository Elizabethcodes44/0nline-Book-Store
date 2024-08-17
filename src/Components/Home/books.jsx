import { useState, useEffect } from "react";

export default function BooksList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    //fetch data from the json fıle
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        
        setBookList(data.Books);
      })
      .catch((error) => console.error("Error Fetching book list: ", error));
  }, []);
  return (
    <div className="text-black">
      {Array.isArray(bookList) && bookList.map((book, index) => (
        <div key={index}>
          <h1>{book.title}</h1>
          <p>{book.plot_summary}</p>
          <img src= {book.cover_image}/>
          <button>SEE MORE</button>
        </div>
      ))}
    </div>
  );
}
