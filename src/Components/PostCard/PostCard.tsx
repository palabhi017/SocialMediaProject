import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";

const PostCard = () => {
  return (
    <div className="p-5 w-fit m-5 rounded-xl shadow-md bg-[#fff]">
      <div className="flex gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-base">Abhishek</span>
          <span className="text-sm text-gray-400">Badnawar, MP</span>
        </div>
      </div>
      <img
        className="w-120 rounded mt-3"
        src="https://1.bp.blogspot.com/-KANgNmAXGGA/X9IHjMTivVI/AAAAAAAAAVA/VW6WFYFSPDM6ehwZarHB8Q5Y14r7_tp9wCLcBGAsYHQ/s1920/20201210_165103.jpg"
        alt=""
      />
      <div className="flex justify-between p-2 border-b border-gray-200">
        <img
          className="w-6 h-6 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <div className="flex gap-3 items-center">
          <span className="text-sm"> 13 Comments</span>
          <span className="text-sm">345 Likes</span>
        </div>
      </div>
      <div className="flex justify-between p-2 border-b border-gray-200">
        <div className="flex items-center gap-1 text-sm">
          <HeartIcon className="size-4" />
          Like
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ChatBubbleBottomCenterIcon className="size-4" />
          Comment
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ShareIcon className="size-4" />
          Share
        </div>
      </div>
      <div className="flex items-center justify-between p-2 border-b gap-5 border-gray-200">
        <img
          className="w-7 h-7 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <input
          type="text"
          className="h-7 flex-1 bg-gray-100 rounded-sm text-sm p-2"
          placeholder="Write a comment..."
        />
        <PaperAirplaneIcon className="size-5" />
      </div>
    </div>
  );
};

export default PostCard;
