import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ProfileModal from "../ProfileModal/ProfileModal";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const Header = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>();
  const [profileModalOpen, setProfileModalOpen] = useState<boolean>();
  const { user } = useSelector((state: any) => state.AuthReducer);
  const navigate = useNavigate();
  let handleLogoutFun = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div className="flex justify-between h-12 shadow-xs">
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
      {/* <ModalWrapper onClose={() => setProfileOpen(false)}> */}
      <div className="w-60 flex items-center justify-end px-4 ">
        <div
          className="cursor-pointer flex items-center justify-end gap-2"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <div className="text-md ">{user?.Name}</div>
          <img
            className="w-9 h-9 rounded-full"
            src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
            alt=""
          />
        </div>
        {profileOpen && (
          <div className="fixed top-12 z-50 bg-stone-50 w-60 rounded-b-md">
            <div
              className="p-2 text-base cursor-pointer"
              onClick={() => setProfileModalOpen(true)}
            >
              Profile
            </div>
            <div
              className="p-2 text-base cursor-pointer"
              onClick={() => handleLogoutFun()}
            >
              Logout
            </div>
          </div>
        )}
      </div>
      {/* </ModalWrapper> */}
      {profileModalOpen && (
        <ModalWrapper onClose={() => setProfileModalOpen(false)}>
          <ProfileModal />
        </ModalWrapper>
      )}
    </div>
  );
};

export default Header;
