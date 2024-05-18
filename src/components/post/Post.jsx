// "use client";

import { getUser } from "@/lib/API_data";
import Link from "next/link";

const Post = async ({ post }) => {
  const users = await getUser();

  return (
    <Link
      href="/post"
      className="bg-white w-48% rounded-lg hover:scale-105 hover:bg-slate-300 cursor-pointer lg:w-90% md:h-full"
    >
      {/* Header */}
      <div className="flex p-1 gap-1 ">
        <img
          className="w-8 h-8 bg-none rounded-full border-[#5c5b5b]"
          src="/Image/Profile.jpg"
        ></img>
        <div className="text-xs truncate">
          <div className="truncate"></div>
          <div className="text-[#A59CA5]">Posted on 4/4/2024</div>{" "}
          {/* ยังไม่ได้เปลี่ยน */}
        </div>
      </div>

      {/* Content */}
      <div className="">
        <img
          className=""
          src="/Image/D3XJVgHV4AEBVAv.jpg"
          alt="เพราะเป็นวัยรุ่นจึงเจ็บปวด"
        />
        <div className="text-xs text-[#5c5b5b] p-1 line-clamp-5">
          <div> {post.description} </div>
          <div className="text-[#712573] ">
            #หนังสือมือสอง #เพราะเป็นวัยรุ่นจึงเจ็บปวด
            #ส่งต่อหนังสือมือสองคุณภาพดี #หนังสือจิตวิทยา Lorem ipsum dolor sit
            amet consectetur adipisicing elit. A, exercitationem minima
            reiciendis ducimus cum id impedit, similique aliquid officia
            asperiores magnam? Quasi eum iste libero doloribus modi dicta
            numquam officiis?
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end space-x-1 pl-1">
        <div className="font-bold">฿139</div>
        <div className="line-through text-xs text-[#A59CA5]">฿180</div>
      </div>
    </Link>
  );
};

export default Post;
