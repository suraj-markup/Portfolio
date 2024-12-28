import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Slider from "react-slick";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import Circle from "../assets/circle";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";


const TopPicks = () => {
    const books = [
        { title: "Rich People Problems", author: "By Kevin Kwan", img: book1 },
        { title: "Crazy Rich Asians", author: "By Kevin Kwan", img: book2 },
        {
          title: "All The Light We Cannot See",
          author: "By Anthony Doerr",
          img: book3,
        },
        {
          title: "Becoming Michelle Obama",
          author: "By Michelle Obama",
          img: book4,
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
        <span className="relative inline-block">
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
              Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id
              tristique velit vitae a odio mi. Aenean aliquet non dictumst sit
              nulla risus magna nisi massa. Egestas mattis ullamcorper integer
              nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet
              tempus.
            </p>
            <div className=" mx-auto my-20">
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
                          className={`rounded-lg object-cover w-full ${
                            index === currentIndex
                              ? "scale-[2] mb-20"
                              : "scale-110"
                          }`}
                        />
                        <h3
                          className={`text-center text-white ${
                            index === currentIndex
                              ? "scale-[1.3] mb-2"
                              : "scale-110"
                          } `}
                        >
                          {book.title}
                        </h3>
                        <p
                          className={`text-center  text-gray-400  ${
                            index === currentIndex
                              ? "scale-[1.3] mb-2"
                              : "scale-110"
                          } `}
                        >
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

          {/* Favourite Blogs */}

          <div className=" w-10/12 m-auto">
          <div className="flex flex-row justify-between items-end my-10">

          <h1 className="text-5xl md:text-[40px] font-bold ">Favourite Blogs</h1>
          <p className="text-sm md:text-xl">View More</p>
          </div>
            <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet consectetur. Nec enim feugiat id tristique velit vitae a odio mi. Aenean aliquet non dictumst sit nulla risus magna nisi massa. Egestas mattis ullamcorper integer nibh ridiculus auctor. Nascetur velit diam odio ante tempor amet tempus. 
            </p>

            <div className="flex flex-wrap justify-between my-10">

                  {/* blog1 */}

              <div className="text-lg">
                <img src={blog1} alt="blog1" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>

                  {/* blog2 */}

              <div className="text-lg">
                <img src={blog2} alt="blog2" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>

                {/* blog3 */}

              <div className="text-lg">
                <img src={blog3} alt="blog3" className=" rounded-2xl"/>
                <p className="mt-4 mb-2">
                  Title
                </p>
                <p className="text-gray-400">
                Author
                </p>
              </div>
            </div>

          </div>

        </div>
  )
}

export default TopPicks;