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
    <div className="py-10">
      <h1 className="text-2xl text-center mb-5 mt-4">Books</h1>
    
        {Array.isArray(bookList) &&
          bookList.map((book, index) => (
            < div className="swiper-slide h-200 w-800" key={index}>
             
                  <img src={book.cover_image} className="w-40 h-40 object-cover rounded-lg mb-4"/>
                  <h1>{book.title}</h1>
                 
                </div>
             
            
          ))}
        <div >
          <div >
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
         
        </div>
       
     
     
    </div>
  );
}
