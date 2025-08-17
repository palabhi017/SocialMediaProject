import ChatsSection from "../../Components/HomePageConponents/ChatsSection";
import Header from "../../Components/HomePageConponents/Header";
import Sidebar from "../../Components/HomePageConponents/Sidebar";
import PostCard from "../../Components/PostCard/PostCard";

const Homepage = () => {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 max-h-screen bg-gray-100 overflow-y-auto">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <ChatsSection />
      </div>
    </div>
  );
};

export default Homepage;
