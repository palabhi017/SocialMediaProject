// @ts-ignore
import apiClient from "../../api/client";
import { useDispatch, useSelector } from "react-redux";
import ChatsSection from "../../Components/HomePageConponents/ChatsSection";
import Header from "../../Components/HomePageConponents/Header";
import Sidebar from "../../Components/HomePageConponents/Sidebar";
import PostCard from "../../Components/PostCard/PostCard";
import PostMemeCard from "../../Components/PostMemeCard/PostMemeCard";
import { useEffect, useState } from "react";
import { refetchFalse } from "../../Store/Refetch/RefetchSlice";
// @ts-ignore
import { socket } from "../../api/socket.js";

const Homepage = () => {
  const dispatch = useDispatch();
  const [allPostData, setAllPostData] = useState<any>();
  const { isRefetch } = useSelector((state: any) => state.RefetchReducer);
  let handleGetAllPost = async () => {
    try {
      let res = await apiClient.get<any>("/post/getAllpost");
      console.log(res.data.allPost);
      dispatch(refetchFalse());
      setAllPostData(res.data.allPost);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("new_post", (data: any) => {
      setAllPostData((prev: any) => [data, ...prev]);
    });

    return () => {
      socket.off("new_post", (data: any) => {
        setAllPostData((prev: any) => [data, ...prev]);
      });
    };
  }, []);

  useEffect(() => {
    handleGetAllPost();
  }, []);

  useEffect(() => {
    if (isRefetch) {
      handleGetAllPost();
    }
  }, [isRefetch]);

  console.log(allPostData,"allPostData")

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 bg-gray-100 overflow-y-auto scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-blue-200">
          <PostMemeCard />
          {allPostData &&
            allPostData?.length &&
            allPostData.map((e: any) => <PostCard key={e._id} {...e} />)}
        </div>
        <ChatsSection />
      </div>
    </div>
  );
};

export default Homepage;
