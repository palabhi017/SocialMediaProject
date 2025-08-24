import {
  ChatBubbleBottomCenterIcon,
  HeartIcon,
  PaperAirplaneIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import CommentSection from "../CommentSection/CommentSection"
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  commentLoading
} from "../../Store/Comment/commentSlice"
import axios from "axios";
import apiClient from "../../api/client.js";


interface CommentPostValue {
  comment: String
  userId: String
  postId: String
}

const PostCard = ({ Location, Image, User, _id }: any) => {
  const [showCommentSection, setshowCommentSection] = useState(false)
  const [allComment, setAllComment] = useState<any[]>([])

  console.log(Location, Image, User, "OOOOOOO")

  const formik = useFormik({
    initialValues:
    {
      comment: "",
      userId: User?._id,
      postId: _id
    },
    onSubmit: (values, { resetForm }) => {
      postComment(values)
      resetForm();
    }
  })

  const postComment = async (values: CommentPostValue) => {
    try {
      let res = await apiClient.post<any>(
        "comment/postComment",
        {
          ...values
        }
      )
      setAllComment([res.data as any, ...allComment]);

      console.log(res, "resresres")
    } catch (err) {
      console.log(err, "PPPPpppppp")
    }
  }

  useEffect(() => {
    getAllComments()
  }, [showCommentSection])

  const getAllComments = async () => {
    if (showCommentSection) {
      const postId = _id;

      await apiClient.get<any>(`/comment/getComment/${postId}`)
        .then((res: any) => {
          console.log(res,"Ppppppppppp=====")
          setAllComment(res.data)
        }).catch((err: any) => {
          console.log(err)
        })
    }
  }


  return (
    <div className="p-5 w-fit m-5 rounded-md shadow-2xs bg-[#fff]">
      <div className="flex gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-base">{User.Name}</span>
          <span className="text-sm text-gray-400">{Location}</span>
        </div>
      </div>
      <img className="w-120 rounded mt-3" src={Image} alt="" />
      <div className="flex justify-between p-2 border-b border-gray-200">
        <img
          className="w-6 h-6 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <div className="flex gap-3 items-center">
          <span className="text-sm"> 13 Comments</span>
          <span className="text-sm">345 Likes</span>
        </div>
      </div>
      <div className="flex justify-between p-2 border-b border-gray-200">
        <div className="flex items-center gap-1 text-sm">
          <HeartIcon className="size-4" />
          Like
        </div>
        <div className="flex items-center gap-1 text-sm cursor-pointer"
          onClick={() => {
            setshowCommentSection(!showCommentSection)
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
      {
        showCommentSection ? (
          <div className="h-50 max-h-50 overflow-y-auto ">
            {allComment.map((comment, index) => (
              <CommentSection key={index} comment={comment} />
            ))}
          </div>
        ) : null
      }
      <div className="flex items-center justify-between p-2 border-b gap-5 border-gray-200">
        <img
          className="w-7 h-7 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <input
          name="comment"
          type="text"
          className="h-7 flex-1 bg-gray-100 rounded-sm text-sm p-2"
          placeholder="Write a comment..."
          onChange={formik.handleChange}
          value={formik.values.comment}

        />
        <PaperAirplaneIcon className="size-5"
          onClick={() => formik.handleSubmit()}
        />
      </div>
    </div>
  );
};

export default PostCard;
