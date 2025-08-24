import { useState } from "react";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import { PencilIcon } from "@heroicons/react/24/outline";

const ProfileModal = () => {
  const [city, setCity] = useState<string>("");
  return (
    <div
      className={`w-[500px] h-[500px] bg-[#262626]  flex flex-col items-center rounded-xl shadow-sm transition-[width] duration-300 ease-in-out`}
    >
      <div
        className={`h-8 bg-black w-full rounded-t-xl text-white  text-base flex justify-center items-center transition-[width] duration-300 ease-in-out`}
      >
        Profile
      </div>
      <div className="p-3">
        <div className="flex flex-col items-end">
          <UserProfileImage size={"[250px]"} fontSize={"lg"} />
          <div className="flex items-center gap-1">
            <PencilIcon className="size-4 text-stone-50 align-right fill-indigo-500" />{" "}
            <span className="text-indigo-500 text-base hover:text-indigo-300 hover:underline cursor-pointer">
              Edit
            </span>
          </div>
        </div>
        <div className="flex mt-3  justify-center items-center">
          <input
            type="text"
            className="text-stone-50 text-base font-normal focus:outline-none"
            placeholder="City"
            maxLength={25}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
