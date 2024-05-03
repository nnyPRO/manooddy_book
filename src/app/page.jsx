import Image from "next/image";
import Post from "@/components/post/Post"

const Home = () => {
  return (
    <div>
      {/* Search */}
      <div className="flex justify-center pt-5">
        <div className="flex justify-between items-center bg-white w-80 h-8 rounded-lg">
          <div className="pl-4 font-medium">Find a book ...</div>
          <button className="bg-[#FFACCA] h-8 w-9 pl-1.5 rounded-r-lg">
            <Image
              className=""
              src="/Icon/Search.svg"
              width={25}
              height={25}
              alt="search"
            />
          </button>
        </div>
      </div>
      {/* Button to add post */}
      <div className="flex justify-center pt-3">
        <button className="flex space-x-2 justify-center items-center bg-[#FFACCA] w-80 h-8 rounded-2xl">
          <div className="font-medium">Add your post</div>
          <Image
            className=""
            src="/Icon/Add_post.svg"
            width={25}
            height={25}
            alt="Add post"
          ></Image>
        </button>
      </div>

      
      <Post/>
      

    </div>
  );
};

export default Home;
