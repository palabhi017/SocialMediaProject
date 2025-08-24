import {
  BookmarkIcon,
  Cog6ToothIcon,
  HomeIcon,
  PaperAirplaneIcon,
  Squares2X2Icon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="w-60  h-full">
      <div className="flex flex-col  pl-10 gap-5 mt-5">
        <div className="flex gap-3 text-base items-center">
          <HomeIcon className="size-5" />
          Feed
        </div>
        <div className="flex gap-3 text-base items-center">
          <Squares2X2Icon className="size-5" />
          Explore
        </div>
        <div className="flex gap-3 text-base items-center">
          <HomeIcon className="size-5" />
          Marketplace
        </div>
        <div className="flex gap-3 text-base items-center">
          <UserGroupIcon className="size-5" />
          Groups
        </div>
        <div className="flex gap-3 text-base items-center">
          <BookmarkIcon className="size-5" />
          My favorites
        </div>
        <div className="flex gap-3 text-base items-center">
          <PaperAirplaneIcon className="size-5" />
          Messages
        </div>
        <div className="flex gap-3 text-base items-center">
          <Cog6ToothIcon className="size-5" />
          Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
