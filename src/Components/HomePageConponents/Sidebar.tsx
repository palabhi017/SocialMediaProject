import {
  BookmarkIcon,
  Cog6ToothIcon,
  HomeIcon,
  PaperAirplaneIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  let SideOpt = [
    { icon: <HomeIcon className="size-5" />, Name: "Feed" },
    { icon: <Squares2X2Icon className="size-5" />, Name: "Explore" },
    { icon: <UserGroupIcon className="size-5" />, Name: "Marketplace" },
    { icon: <BookmarkIcon className="size-5" />, Name: "My favorites" },
    { icon: <PaperAirplaneIcon className="size-5" />, Name: "Messages" },
    { icon: <Cog6ToothIcon className="size-5" />, Name: "Settings" },
  ];

  return (
    <div className="w-60 ">
      <div className="flex flex-col  pl-10 gap-5 mt-5">
        {SideOpt &&
          SideOpt.map((e) => (
            <div className="flex gap-3 text-base items-center cursor-pointer">
              {e.icon}
              {e.Name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
