import { useState } from "react";
import Button from "../Button/Button";
import SelectFileModal from "../SelectFileModal/SelectFileModal";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

const PostMemeCard = () => {
  const [showPostModal, setShowPostModal] = useState<boolean>(false);

  return (
    <div className="p-5 w-130 m-5 rounded-md shadow-2xs bg-[#fff]">
      <div className="flex gap-3 justify-between items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <div className="flex  items-center">
          <Button Name={"Create Post"} action={() => setShowPostModal(true)} />
        </div>
      </div>
      {showPostModal && (
        <ModalWrapper onClose={() => setShowPostModal(false)}>
          <SelectFileModal setShowPostModal={setShowPostModal} />
        </ModalWrapper>
      )}
    </div>
  );
};

export default PostMemeCard;
