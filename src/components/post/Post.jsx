// "use client";

import { getBooks } from "@/lib/API/getBooks";
import { getRealPrice, getPriceAfterDiscount } from "@/lib/API/getPrice";
import { getTags } from "@/lib/API/getTags";
import { getUser } from "@/lib/API/getUser";
import { getPostCreateAt } from "@/lib/API/getPosts";
import Image from "next/image";
import Link from "next/link";

const Post = async ({ post }) => {
  // const ID = { id: post.id };
  const sellerID = post.sellerID;
  // console.log("sellerID: ", typeof sellerID);
  const user = await getUser(sellerID);
  const books = await getBooks(post.id);
  const realPrice = getRealPrice(books);
  const priceAfterDiscount = getPriceAfterDiscount(books);
  const tags = await getTags(post.id);
  const postCreateAt = await getPostCreateAt(post.id)
  console.log("postCreateAt: ", postCreateAt);

  return (
    <Link
      href={`/${post.slug}`}
      className="bg-white w-48% rounded-lg hover:scale-105 hover:bg-slate-300 cursor-pointer lg:w-90% md:h-full"
    >
      {/* Header */}
      <div className="flex p-1 gap-1 ">
        <Image
          className="w-8 h-8 bg-none rounded-full border-[#5c5b5b]"
          src={user.image}
          alt="Profile"
          width={15}
          height={15}
        ></Image>
        <div className="text-xs truncate">
          <div className="truncate">{user.username}</div>
          <div className="text-[#A59CA5]">
            Posted on {new Date(postCreateAt.createdAt).toLocaleString()}
          </div>
          {/* ยังไม่ได้เปลี่ยน */}
        </div>
      </div>

      {/* Content */}
      <div className="">
        <Image
          className=""
          src={post.image}
          alt="เพราะเป็นวัยรุ่นจึงเจ็บปวด"
          width={300}
          height={300}
        />
        <div className="text-xs text-[#5c5b5b] p-1 line-clamp-5">
          <div> {post.description} </div>
          <div className="text-[#712573] ">
            {tags.map((tag) => (
              <span key={tag.id}>#{tag.name} </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end space-x-1 pl-1">
        {books.length == 1 && (
          <div className="font-bold">฿{priceAfterDiscount[0]} </div>
        )}
        {books.length == 1 && (
          <div className="line-through text-xs text-[#A59CA5]">
            ฿{realPrice[0]}
          </div>
        )}
        {books.length > 1 && (
          <div className="font-bold">
            ฿{priceAfterDiscount[1]} - ฿{priceAfterDiscount[0]}{" "}
          </div>
        )}
        {books.length > 1 && (
          <div className="line-through text-xs text-[#A59CA5]">
            ฿{realPrice[1]} - ฿{realPrice[0]}
          </div>
        )}
      </div>
    </Link>
  );
};

export default Post;
