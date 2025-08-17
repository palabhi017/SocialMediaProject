import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <div className="flex justify-between h-12 shadow-md">
      <div className="flex items-center justify-center w-60">Logo</div>
      <div className="flex items-center flex-1 px-5">
        <div className="flex w-80 px-2 h-8 items-center rounded border-2 border-gray-200">
          <MagnifyingGlassIcon className="size-5 text-gray-500" />

          <input
            className=" text-base inline-block align-middle px-2 focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="w-60 flex items-center justify-end px-4 ">
        <div className="cursor-pointer flex items-center justify-end gap-2">
          <div className="italic">Abhishek</div>
          <img
            className="w-10 h-10 rounded-full"
            src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
