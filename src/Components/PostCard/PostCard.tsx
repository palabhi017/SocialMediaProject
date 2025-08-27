import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import CommentSection from "../CommentSection/CommentSection";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
// @ts-ignore
import apiClient from "../../api/client.js";
// @ts-ignore
import { socket } from "../../api/socket.js";

interface CommentPostValue {
  comment: String;
  userId: String;
  postId: String;
}

const PostCard = ({ Location, Image, commentCount, _id }: any) => {
  const [showCommentSection, setshowCommentSection] = useState(false);
  const [allComment, setAllComment] = useState<any[]>([]);
  const [localCommentCount, setLocalCommentCount] = useState(commentCount || 0);

  const { user } = useSelector((state: any) => state.AuthReducer);

  const formik = useFormik({
    initialValues: {
      comment: "",
      userId: "",
      postId: "",
    },
    onSubmit: (values, { resetForm }) => {
      postComment(values);
      resetForm();
    },
  });

  const postComment = async (values: CommentPostValue) => {
    try {
      setshowCommentSection(true);
      let res = await apiClient.post<any>("comment/postComment", {
        ...values,
        userId: user?._id,
        postId: _id,
      });
    } catch (err) {
      console.log({ Err: err });
    }
  };

  useEffect(() => {
    socket.on("newComment", (data: any) => {
      if (data.postId === _id) {
        // Only update this post
        setAllComment((prevComments) => [data, ...prevComments]);
      }
    });

    socket.on("commentCount", (data: any) => {
      if (data === _id) {
        // Only update this post
        setLocalCommentCount((prev: number) => prev + 1);
      }
    });

    return () => {
      socket.off("newComment");
      socket.off("commentCount");
    };
  }, [_id]);

  useEffect(() => {
    getAllComments();
  }, [showCommentSection]);

  const getAllComments = async () => {
    if (showCommentSection) {
      const postId = _id;

      await apiClient
        .get<any>(`/comment/getComment/${postId}`)
        .then((res: any) => {
          setAllComment(res.data);
        })
        .catch((err: any) => {
          console.log(err);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="p-5 w-fit m-5 rounded-md shadow-2xs bg-[#fff]">
      <div className="flex gap-3">
        <UserProfileImage size={"45px"} fontSize={"base"} />
        <div className="flex flex-col">
          <span className="text-base">{user.Name}</span>
          {Location && (
            <span className="text-sm text-gray-400">{Location}</span>
          )}
        </div>
      </div>
      <img className="w-120 rounded mt-3" src={Image} alt="" />
      <div className="flex justify-between p-2 border-b border-gray-200">
        <UserProfileImage size={"22px"} fontSize={"xs"} />
        <div className="flex gap-3 items-center">
          <span className="text-sm"> {localCommentCount} Comments</span>
          <span className="text-sm">345 Likes</span>
        </div>
      </div>
      <div className="flex justify-between p-2 border-b border-gray-200">
        <div className="flex items-center gap-1 text-sm">
          <HeartIcon className="size-4" />
          Like
        </div>
        <div
          className="flex items-center gap-1 text-sm cursor-pointer"
          onClick={() => {
            setshowCommentSection(!showCommentSection);
          }}
        >
          <ChatBubbleBottomCenterIcon className="size-4" />
          Comment
        </div>
        <div className="flex items-center gap-1 text-sm">
          <ShareIcon className="size-4" />
          Share
        </div>
      </div>
      {showCommentSection ? (
        <div className="max-h-50 overflow-y-auto ">
          {allComment.map((comment, index) => (
            <CommentSection key={index} comment={comment} />
          ))}
        </div>
      ) : null}
      <div className="flex items-center justify-between p-2 border-b gap-5 border-gray-200">
        <UserProfileImage size={"25px"} fontSize={"xs"} />
        <input
          name="comment"
          type="text"
          className="h-7 flex-1 bg-gray-100 rounded-sm text-sm p-2"
          placeholder="Write a comment..."
          onChange={formik.handleChange}
          value={formik.values.comment}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              formik.handleSubmit(); // Call your sendMessage function
            }
          }}
        />
        <PaperAirplaneIcon
          className="size-5"
          onClick={() => formik.handleSubmit()}
        />
      </div>
    </div>
  );
};

export default PostCard;
