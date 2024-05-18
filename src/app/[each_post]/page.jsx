"use client";

import React from "react";
import Image from "next/image";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
  }

  // Function to scroll left
  scrollLeft = () => {
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollBy({
        left: -100,
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  scrollRight = () => {
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollBy({
        left: 100,
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <div className="md:pt-3">
        {/* Big Image */}
        <div className="bg-[#F4EAEE] aspect-w-1 aspect-h-1">
          <img src="Image/Post_Image.jpg" alt="Post Image" className="p-4" />
        </div>
        {/* Small Image or Options */}
        <div className="flex items-center mt-4">
          {/* Left arrow button */}
          <button
            onClick={this.scrollLeft}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Image src="Icon/Left_arrow.svg" width={15} height={15} />
          </button>

          {/* Scrollable container */}
          <div
            ref={this.scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth mx-4 p-2 gap-2f"
          >
            {/* Add content here */}
            <div className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center">
              <img
                src="Image/Error_book.jpg"
                alt="Error Book"
                className="h-24 w-22 p-1"
              />
            </div>
            <div className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center">
              <img
                src="Image/Error_book.jpg"
                alt="Error Book"
                className="h-24 w-22 p-1"
              />
            </div>
            <div className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center">
              <img
                src="Image/Error_book.jpg"
                alt="Error Book"
                className="h-24 w-22 p-1"
              />
            </div>
            <div className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center">
              <img
                src="Image/Error_book.jpg"
                alt="Error Book"
                className="h-24 w-22 p-1"
              />
            </div>
            <div className="bg-[#F4EAEE] flex-none rounded-lg w-24 h-24 flex justify-center">
              <img
                src="Image/Error_book.jpg"
                alt="Error Book"
                className="h-24 w-22 p-1"
              />
            </div>

            {/* Add more items as needed */}
          </div>

          {/* Right arrow button */}
          <button
            onClick={this.scrollRight}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
          >
            <Image src="Icon/Right_arrow.svg" width={15} height={15} />
          </button>
        </div>
      </div>
    );
  }
}

export default Posts;
