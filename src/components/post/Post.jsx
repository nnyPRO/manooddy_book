import Image from "next/image";

const Post = () => {
  return (
    <div className="bg-white w-165px rounded-lg ">
      {/* Header */}
      <div className="flex p-1">
        <Image
          className="bg-none"
          src="/Icon/Profile.svg"
          width={25}
          height={25}
        ></Image>
        <div className="text-xs truncate">
          <div className="truncate">
            คนที่นอนเก่งขนาดนี้เป็นของคุณนะ Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Culpa neque ex minus quaerat. Quo
            facere quod architecto veritatis temporibus nobis enim ad, pariatur
            similique mollitia fugiat odit, perspiciatis sapiente? Vitae.
          </div>
          <div className="text-[#A59CA5]">Posted on 4/4/2024</div>
        </div>
      </div>

      {/* Content */}
      <div className="">
        <img
          className="w-165px"
          src="/Image/D3XJVgHV4AEBVAv.jpg"
          alt="เพราะเป็นวัยรุ่นจึงเจ็บปวด"
        />
        <div className="text-xs">
          <div> เพราะเป็นวัยรุ่นจึงเจ็บปวด สภาพดี 100% ฮะ </div>
          <div>
            #หนังสือมือสอง #เพราะเป็นวัยรุ่นจึงเจ็บปวด
            #ส่งต่อหนังสือมือสองคุณภาพดี #หนังสือจิตวิทยา
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-end space-x-1">
        <div>฿139</div>
        <div className="line-through text-xs">฿180</div>
      </div>
    </div>
  );
};

export default Post;
