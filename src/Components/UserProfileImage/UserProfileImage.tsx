import { useSelector } from "react-redux";

const UserProfileImage = ({
  size,
  fontSize,
  Image,
}: {
  size: string | number;
  fontSize: string;
  Image?: string | null;
}) => {
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
    <>
      {user.ProfileImg || Image ? (
        <img
          style={{ width: size, height: size }}
          className={`rounded-full`}
          src={Image || user?.ProfileImg}
          alt=""
        />
      ) : (
        <div
          style={{ width: size, height: size }}
          className={`rounded-full text-${fontSize} bg-blue-200 flex justify-center items-center`}
        >
          {getInitials(user.Name)}
        </div>
      )}
    </>
  );
};

export default UserProfileImage;
