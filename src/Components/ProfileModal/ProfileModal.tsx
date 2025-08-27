import { PencilIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
// @ts-ignore
import apiClient from "../../api/client";
import { useDispatch } from "react-redux";
import { profileUpdate } from "../../Store/Auth/AuthSlice";
import Loader from "../Loader/Loader";

const ProfileModal = ({ CloseModal }: { CloseModal: () => void }) => {
  const [city, setCity] = useState<string>("");
  const selectFileRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [ProfileLoading, setProfileLoading] = useState(false);
  let postImage = () => {
    if (selectFileRef.current) {
      selectFileRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreviewUrl(URL.createObjectURL(file));
    setSelectedFile(file);
  };
  let handleUpdateProfile = async () => {
    if (!selectedFile) return;
    const formData: any = new FormData();

    formData.append("Image", selectedFile);
    formData.append("City", city);
    setProfileLoading(true);
    try {
      let res = await apiClient.patch("/auth/editProfile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res);
      dispatch(profileUpdate({ ...res.data }));
      toast.success("Post created successfully");
      CloseModal();
    } catch (error) {
      toast.error("Somthing went wrong!");
    } finally {
      setProfileLoading(false);
    }
  };

  return (
    <div
      className={`w-[500px] h-[500px] bg-[#262626]  flex flex-col items-center rounded-xl shadow-sm transition-[width] duration-300 ease-in-out`}
    >
      <div
        className={`h-8 bg-black w-full rounded-t-xl text-white  text-base flex justify-center items-center transition-[width] duration-300 ease-in-out`}
      >
        Profile
      </div>
      {ProfileLoading ? (
        <Loader text={"Updating..."} />
      ) : (
        <>
          {" "}
          <div className="p-3 flex-1">
            <div className="flex flex-col items-end">
              <UserProfileImage
                size={"220px"}
                fontSize={"lg"}
                Image={previewUrl}
              />
              <div className="flex items-center gap-1">
                <input
                  ref={selectFileRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
                <PencilIcon className="size-4 text-stone-50 align-right fill-indigo-500" />{" "}
                <span
                  className="text-indigo-500 text-base hover:text-indigo-300 hover:underline cursor-pointer"
                  onClick={() => postImage()}
                >
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
          <div className="h-15 w-full px-5 flex items-center justify-end">
            <button
              onClick={handleUpdateProfile}
              className="bg-indigo-600 text-stone-50 text-base cursor-pointer font-normal rounded-md px-3 shadow-md hover:bg-indigo-700 active:scale-98 active:translate-y-0.5 transition-transform duration-25"
            >
              Save
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileModal;
