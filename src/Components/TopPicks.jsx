import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import Circle from "../assets/Circle";

const TopPicks = () => {
  const books = [
    {
      title: "Steve Jobs",
      author: "By Walter Isaacson",
      img: "https://m.media-amazon.com/images/I/81NSb9Jy0HL._SL1500_.jpg",
    },
    {
      title: "Elon Musk",
      author: "By Walter Isaacson",
      img: "https://m.media-amazon.com/images/I/71iWxmst49L._SL1500_.jpg",
    },
    {
      title: "My Life and Work",
      author: "By Henry Ford ",
      img: "https://m.media-amazon.com/images/I/61w6Rg4q57L._SL1360_.jpg",
    },
    {
      title: "Godan",
      author: "By Munshi Premchand",
      img: "https://gyaanstore.com/cdn/shop/files/145_595179f5-41e5-4217-ba61-60c8443a161c.png?v=1706901488&width=600",
    },
    {
      title: "Brahman ki Beti",
      author: "By Sarat Chandra Chattopadhyay",
      img: "https://m.media-amazon.com/images/I/81RVLLFWPwL._SL1500_.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  // Settings for react-slick slider
  const settings = {
    infinite: true,
    slidesToShow: 4, // Show 3 books at a time
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1, // Show only 1 item
        },
      },
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1, // Show only 1 item
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // Track the current slide index
  };
  return (
    <div className="bg-black text-white p-10 mt-32">
      <h1 className="relative text-4xl md:text-6xl font-bold text-center mb-16">
   
        <span
        className="relative inline-block"
              style={{
                background:
                  "linear-gradient(90deg, #FF3BFF 37.5%, #ECBFBF 46.45%, #8156FF 50.68%, #D94FD5 61.05%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
          My Top Picks
          <span className="relative">
            <Circle className="absolute size-32  md:size-max -top-8 right-0  transform translate-x-10 md:translate-x-10" />
          </span>
        </span>
      </h1>

      {/* Favoutrite Books */}
      <div className=" w-10/12 m-auto">
        <h1 className="text-3xl md:text-[40px] font-bold my-10">Books</h1>
        <p className="text-lg">
          &quot;A reader lives a thousand lives before he dies. The man who
          never reads lives only one.&quot; -- George R.R. Martin
        </p>
        <div className=" mx-auto mt-20">
          <div className="relative w-full">
            {/* Slider with scaling logic */}
            <Slider {...settings}>
              {books.map((book, index) => (
                <div
                  key={index}
                  className="p-14 py-32 flex items-center justify-evenly"
                >
                  <div
                    key={index}
                    className={`group relative flex flex-col items-center transform transition-transform duration-300 w-6/6`}
                  >
                    {/* Image */}
                    <img
                      src={book.img}
                      alt={book.title}
                      className={`rounded-lg object-cover w-full scale-125`}
                    />
                    <h3 className={`text-center text-white mt-10  `}>
                      {book.title}
                    </h3>
                    <p className={`text-center  text-gray-400  `}>
                      {book.author}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>

            {/* Left Arrow */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPicks;
