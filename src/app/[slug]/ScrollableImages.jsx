"use client"; // Indicates this is a Client Component

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { getBooks } from "@/lib/API/getBooks";
import Book from "@/components/book/Book";

const ScrollableImages = ({ postId, postImage, setSelectedImage }) => {
  let scrollContainerRef = useRef(null);
  let [books, setBooks] = useState([]);
  let [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // console.log("Fetching books for postId:", postId);
        let fetchedBooks = await getBooks(postId);
        // console.log("Fetched books:", fetchedBooks);
        setBooks(fetchedBooks);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError(err);
      }
    };

    if (postId) {
      fetchBooks();
    }
  }, [postId]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  if (error) {
    return <div>Error loading books: {error.message}</div>;
  }

  return (
    <div className="flex items-center mt-4">
      {/* Left arrow button */}
      <button
        onClick={scrollLeft}
        className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
      >
        <Image
          src="/Icon/Left_arrow.svg"
          width={15}
          height={15}
          alt="Left Arrow"
        />
      </button>

      {/* Scrollable container with right arrow button */}
      <div className="flex flex-1 items-center overflow-x-auto">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth mx-4 p-2 gap-2 flex-1"
        >
          {/* content */}
          {books.length > 1 && (
            <div
              className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center"
              onClick={() => setSelectedImage(postImage)}
            >
              <img src={postImage} alt="mainBook" className="p-1" />
            </div>
          )}
          {/* books is array */}
          {books.map((book, index) => (
            <Book
              key={index}
              // console.log(key);
              book={book}
              onClick={() => setSelectedImage(book.image)}
            />
          ))}
        </div>

        {/* Right arrow button */}
        <button
          onClick={scrollRight}
          className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 ml-4"
        >
          <Image
            src="/Icon/Right_arrow.svg"
            width={15}
            height={15}
            alt="Right Arrow"
          />
        </button>
      </div>
    </div>
  );
};

export default ScrollableImages;
