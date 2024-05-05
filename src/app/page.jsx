import Image from "next/image";
import Post from "@/components/post/Post";

const Home = () => {
  return (
    <div>
      <div className="md:flex md:justify-center md:space-x-3">
        {/* Search */}
        <div className="flex justify-center pt-5">
          <div className="flex justify-between items-center bg-white w-80 h-8 rounded-xl md:w-420px lg:w-520px md:h-10">
            <div className="pl-4 font-medium md:text-lg">Find a book ...</div>
            <button className="bg-[#FFACCA] h-8 w-9 pl-1.5 rounded-r-xl hover:scale-110 hover:bg-[#c08ea0] md:h-10 md:w-11">
              <Image
                className="md:w-8"
                src="/Icon/Search.svg"
                width={25}
                height={25}
                alt="search"
              />
            </button>
          </div>
        </div>
        {/* Button to add post */}
        <div className="flex justify-center pt-3 md:pt-5">
          <button className="flex space-x-2 justify-center items-center bg-[#FFACCA] w-80 h-8 rounded-xl hover:scale-105 hover:bg-[#c08ea0] md:w-44 md:h-10">
            <div className="font-medium md:text-lg">Add your post</div>
            <Image
              className="md:w-8"
              src="/Icon/Add_post.svg"
              width={25}
              height={25}
              alt="Add post"
            ></Image>
          </button>
        </div>
      </div>
      <div className="px-1% pt-3 md:pt-5">
        <div className="flex flex-wrap justify-between gap-2 lg:grid grid-cols-4">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
