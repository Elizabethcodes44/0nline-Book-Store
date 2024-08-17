import {useState, useEffect} from "react";
export default function ThrillerCat () {
    const [deals, setDeals] = useState([])
    const [hasBooks, setHasBooks] = useState(false);
  useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
    const filteredBooks = data.Books.filter(
        (book) => book.category === "thriller"
    )
      setDeals(filteredBooks);
      setHasBooks(filteredBooks.length > 0);

    })
    .catch((error)=> console.error("Fetch deals error: ", error))
  }, []);
    return(
      <>
      <div>
<h1 className="text-center mt-7">Thrillers</h1>
      </div>
<div>
      {hasBooks ? (
        deals.map((book, index) => (
                <div key={index} className="book-item">
                  <h2>{book.title}</h2>
                  <p>{book.author}</p>
                  <img src={book.cover_image} alt={`${book.title} cover`} />
                  <p>{book.plot_summary}</p>
                  <button>Add to cart</button>
                </div>
              )) 
            ) : (
            <p>No trending books currently available for this genre</p> // Render nothing if the book is not trending
        )}
    </div>
    </>
    );
}