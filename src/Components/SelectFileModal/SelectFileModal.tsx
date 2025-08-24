import { MapPinIcon, PhotoIcon, PlayIcon } from "@heroicons/react/24/outline";
// @ts-ignore
import apiClient from "../../api/client";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import toast from "react-hot-toast";
import { refetchTrue } from "../../Store/Refetch/RefetchSlice";
import UserProfileImage from "../UserProfileImage/UserProfileImage";

interface PostResponse {
  data?: string;
  message: string;
}

const SelectFileModal = ({
  setShowPostModal,
}: {
  setShowPostModal: (val: boolean) => void;
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.AuthReducer);
  const selectFileRef = useRef<HTMLInputElement>(null);
  const [isExtendModal, setIsExtendModal] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [caption, setCation] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [postLoader, setPostLoader] = useState<boolean>(false);
  let postImage = () => {
    if (selectFileRef.current) {
      selectFileRef.current.click();
    }
  };

  let handleCreatePost = async () => {
    if (!selectedFile) return;
    const formData: any = new FormData();

    formData.append("Image", selectedFile);
    formData.append("User", user._id);
    formData.append("Caption", caption);
    formData.append("Location", location);

    setPostLoader(true);
    try {
      await apiClient.post<PostResponse>("/post/createpost", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      dispatch(refetchTrue());
      setShowPostModal(false);
      toast.success("Post created successfully");
    } catch (error) {
      toast.error("Somthing went wrong!");
      console.log(error);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
    setSelectedFile(file);
  };

  return (
    <>
      <div
        className={`${
          isExtendModal ? "w-[850px]" : "w-[500px]"
        } h-[500px] bg-[#262626] flex flex-col rounded-xl shadow-sm transition-[width] duration-300 ease-in-out`}
      >
        <div
          className={`h-8 bg-black w-full rounded-t-xl text-white  text-base flex justify-center items-center transition-[width] duration-300 ease-in-out`}
          onClick={() => setIsExtendModal(false)}
        >
          {isExtendModal ? "Create new post" : "Crop"}
        </div>
        {postLoader ? (
          <Loader text={"Uploading..."} />
        ) : previewUrl ? (
          <div className="flex flex-1">
            <div className="flex flex-col w-[500px]  shrink-0">
              <div className="flex-1 flex justify-center items-center ">
                <img src={previewUrl} alt="" className="max-h-[435px]" />
              </div>
            </div>
            {isExtendModal && (
              <div className="flex flex-col w-[350px]  items-center p-5">
                <div className="flex w-full h-15  items-center gap-3">
                  <UserProfileImage size={6} fontSize={"sm"} />
                  <span className="text-stone-50 text-base font-normal">
                    {user.Name}
                  </span>
                </div>
                <textarea
                  name=""
                  id=""
                  placeholder="Write caption ..."
                  className="w-full h-50  text-stone-50 resize-none text-base font-normal focus:outline-none"
                  // value={caption}
                  onChange={(e) => setCation(e.target.value)}
                ></textarea>
                <div className="flex mt-3 w-full justify-center items-center">
                  <input
                    type="text"
                    className="flex-5/6 text-stone-50 text-base font-normal focus:outline-none"
                    placeholder="Add location"
                    maxLength={25}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                  <MapPinIcon className="size-5 text-stone-50 stroke-[0.7] " />
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="flex-1  flex flex-col justify-center items-center">
              <div className="flex -space-x-10">
                <PhotoIcon className="size-20 text-stone-50 stroke-[0.7] -rotate-5" />
                <PlayIcon className="size-22 mt-3 text-stone-50 stroke-[0.7] fill-[#262626] rotate-10" />
              </div>
              <div className="text-stone-50 text-md font-normal">
                Drag photos here
              </div>
              <input
                ref={selectFileRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                hidden
              />
              <button
                className="text-stone-50 mt-5 px-4 py-1 text-sm cursor-pointer rounded-lg bg-indigo-600 hover:bg-indigo-700 active:scale-98 active:translate-y-0.5 transition-transform duration-25"
                onClick={postImage}
              >
                Select from device
              </button>
            </div>
          </>
        )}
        <div
          className={`h-8 bg-black w-full rounded-b-xl  px-5  flex justify-end items-center  transition-[width] duration-300 ease-in-out`}
        >
          {!postLoader && isExtendModal && previewUrl ? (
            <div
              className="cursor-pointer text-indigo-500 text-sm hover:text-indigo-300 hover:underline"
              onClick={() => handleCreatePost()}
            >
              Share
            </div>
          ) : previewUrl && !postLoader ? (
            <div
              className="cursor-pointer text-indigo-500 text-sm hover:text-indigo-300 hover:underline"
              onClick={() => setIsExtendModal(true)}
            >
              Next
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default SelectFileModal;
