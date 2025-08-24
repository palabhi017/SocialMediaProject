const ProfileModal = () => {
  return (
    <div
      className={`w-[500px] h-[500px] bg-[#262626] flex flex-col items-center rounded-xl shadow-sm transition-[width] duration-300 ease-in-out`}
    >
      <div
        className={`h-8 bg-black w-full rounded-t-xl text-white  text-base flex justify-center items-center transition-[width] duration-300 ease-in-out`}
      >
        Profile
      </div>
      <div className="bg-gray-50 w-[250px] h-[250px] mt-5 rounded-full"></div>
    </div>
  );
};

export default ProfileModal;
