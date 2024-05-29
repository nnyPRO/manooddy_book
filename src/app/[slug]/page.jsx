// app/posts/[slug]/page.jsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getSlugPost } from "@/lib/API/getSlugPost";
import ScrollableImages from "./ScrollableImages"; // Import the Client Component

const Posts = ({ params }) => {
  const { slug } = params;
  const [selectedImage, setSelectedImage] = useState(null);
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

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

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Loading...</div>;
  }

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
      />
    </div>
  );
};

export default Posts;
