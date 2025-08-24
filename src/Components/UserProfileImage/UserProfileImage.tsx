import { useSelector } from "react-redux";

const UserProfileImage = ({ size }: { size: number }) => {
  const { user } = useSelector((state: any) => state.AuthReducer);
  function getInitials(name: string) {
    if (!name) return "";

    const words = name.trim().split(/\s+/);

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return (
    <div>
      {user.Image ? (
        <img
          className={`w-${size} h-${size} rounded-full`}
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
      ) : (
        <div
          className={`w-${size} h-${size} rounded-full text-md bg-blue-200 flex justify-center items-center`}
        >
          {getInitials(user.Name)}
        </div>
      )}
    </div>
  );
};

export default UserProfileImage;
