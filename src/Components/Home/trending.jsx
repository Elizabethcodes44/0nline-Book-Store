import { useState, useEffect } from "react";
import love from "../../assets/wishlist.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../../index.css";
import { Autoplay } from "swiper/modules";
export default function Trending() {
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setTrendingBooks(data.Books);
      })
      .catch((error) => console.error("Fetch trending books error: ", error));
  }, []);
  return (
    <>
   <h1 className="text-center text-brown text-5xl mt-8">Trending</h1>
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
          {Array.isArray(trendingBooks) &&
            trendingBooks.map((book, index) =>
              book.trending ? (
                <SwiperSlide key={index} className="">
                  <div
                    className={`flex ${
                      active === index ? "card-active" : ""
                    }`}
                    style={{
                      backgroundImage: `url(${book.cover_image})`,
                      backgroundSize: "cover", // Optional: Adjust the background image size
                      backgroundPosition: "center", // Optional: Center the background image
                      backgroundRepeat: "no-repeat", // Optional: Prevent the background image from repeating
                    }}
                    onMouseEnter={() => setActive(index)}
                  onMouseLeave={() => setActive(null)}
                  >
                    <div className= "card">
                      {" "}
                      <h2>{book.title}</h2>
                      <p>{book.author}</p>
                      <img src={love} className="h-10 w-10" />
                      <button className="bg-brown rounded-full">
                        Add to cart
                      </button>
                    </div>

                    {/*<img src={book.cover_image} alt={`${book.title} cover`} /> */}
                  </div>
                </SwiperSlide>
              ) : null // Render nothing if the book is not trending
            )}
        </Swiper>
        
      </div>
    </div>
    </>
  );
}
