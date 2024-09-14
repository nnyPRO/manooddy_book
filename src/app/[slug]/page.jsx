// app/posts/[slug]/page.jsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getSlugPost } from "@/app/api/getSlugPost";
import ScrollableImages from "./ScrollableImages"; // Import the Client Component
import { getPriceAfterDiscount, getRealPrice } from "@/app/api/getPrice";
import { getBooks } from "@/app/api/getBooks";
import Detail from "./Detail";

const Posts = ({ params }) => {
  const { slug } = params;
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedRealPrice, setSelectedRealPrice] = useState(null);
  const [selectedDiscountedPrice, setSelectedDiscountedPrice] = useState(null);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const fetchedPost = await getSlugPost(slug);
        setPost(fetchedPost);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchPost();
  }, [slug]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (post && post._id) {
        try {
          const fetchedBooks = await getBooks(post._id);
          setBooks(fetchedBooks);
        } catch (err) {
          setError(err.message);
        }
      }
    };
    fetchBooks();
  }, [post]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  // console.log("idposttttt:", post._id);
  const realPrice = books.length > 0 ? getRealPrice(books) : [];
  const priceAfterDiscount =
    books.length > 0 ? getPriceAfterDiscount(books) : [];

  return (
    <div className="md:pt-3">
      {/* Big Image */}
      <div className="bg-[#F4EAEE] flex justify-center">
        {post && (selectedImage || post.image) && (
          <img
            src={selectedImage || post.image}
            alt="Post Image"
            className="p-4 h-375px"
          />
        )}
      </div>

      {/* Client Component for interactivity */}
      <ScrollableImages
        key={post._id}
        postId={post._id}
        postImage={post.image}
        setSelectedImage={setSelectedImage}
        setSelectedRealPrice={setSelectedRealPrice}
        setSelectedDiscountedPrice={setSelectedDiscountedPrice}
      />

      <span className="text-[#712573] font-medium text-3xl">
        {selectedDiscountedPrice ||
          (priceAfterDiscount.length == 1 && `฿${priceAfterDiscount[0]}`) ||
          (priceAfterDiscount.length > 1 &&
            `฿${priceAfterDiscount[1]} - ฿${priceAfterDiscount[0]}`)}
      </span>
      <span className="line-through text-xl text-[#A59CA5]">
        {selectedRealPrice ||
          (realPrice.length == 1 && `฿${realPrice[0]}`) ||
          (realPrice.length > 1 && `฿${realPrice[1]} - ฿${realPrice[0]}`)}
      </span>

      <Detail post={post} />
    </div>
  );
};

export default Posts;
