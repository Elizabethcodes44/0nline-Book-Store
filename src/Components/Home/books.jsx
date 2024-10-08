import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../index.css";
import { Autoplay } from "swiper/modules";
import love from "../../assets/wishlist.png";
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
    <div className="h-screen flex items-center justify-center">
     <div className="max-w-5xl">
     <Swiper
          spaceBetween={50}
          slidesPerView={3}
          
          loop= {true}
          centeredSlides={true}
          speed={800}
          autoplay= {{
            delay: 3000,
          }}
          modules={[Autoplay]}
          
        >
        {Array.isArray(bookList) &&
          bookList.map((book, index) => (
            <SwiperSlide key={index} className="">
             
                  <img src={book.cover_image} className="w-40 h-40 object-cover rounded-lg mb-4"/>
                  <h1>Author: {book.author}</h1>
                  <h1>Format: {book.format}</h1>
                  <h1>Language: {book.language}</h1>
                  <img src= {love}
                  className="h-10 w-10"/>
                 
             
             </SwiperSlide>
          ))}

        
        </Swiper>
        </div>
       
    </div>
  );
}
