"use client";

import { getTags } from "@/app/api/getTags";
import { getUser } from "@/app/api/getUser";
import { useState, useEffect } from "react";
import Image from "next/image";

const Detail = ({ post }) => {
  const [user, setUser] = useState(null);
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTags = async () => {
      if (post) {
        try {
          const fetchedTags = await getTags(post._id);
          setTags(fetchedTags);
        } catch (err) {
          setError(err.message);
        }
      }
    };
    fetchTags();
  }, [post]);

  useEffect(() => {
    const fetchUser = async () => {
      if (post) {
        try {
          const fetchedUser = await getUser(post.sellerID);
          // console.log("User found fetchedUser:", fetchedUser);
          setUser(fetchedUser);
        } catch (err) {
          setError(err.message);
        }
      }
    };
    fetchUser();
  }, [post]);
  // console.log("tagggggsssss:", tags);
  // console.log("User found:", user);

  return (
    <div>
      <div className="text-xl text-[#5c5b5b] p-1 line-clamp-5 overflow-y-scroll">
        <div> {post.description} </div>
        <div className="text-[#712573] ">
          {tags.map((tag) => (
            <span key={tag._id}>#{tag.name} </span>
          ))}
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        accusamus vitae mollitia nesciunt esse dolores suscipit sit laborum
        soluta debitis possimus, omnis sunt inventore aliquam a! Temporibus
        doloremque cumque cupiditate.
      </div>
      {user && (
        <div className="">
          <div className="flex items-center gap-3 py-2 pl-1">
            <Image
              className="w-11 h-11 bg-none rounded-full border-[#5c5b5b]"
              src={user.image}
              alt="Profile"
              width={20}
              height={20}
            ></Image>
            <div className="justify-center text-xl truncate">
              {user.username}
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#FFACCA] h-12 w-56 flex rounded-xl justify-center items-center">
              <span className="flex justify-between space-x-3">
                <Image
                  className=""
                  src="/Icon/Cart.svg"
                  width={25}
                  height={25}
                  alt="cart"
                />
                <span className="text-2xl text-[#712573] font-medium">
                  Add to cart
                </span>
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
