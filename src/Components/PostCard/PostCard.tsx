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

interface CommentPostValue {
  comment: String
  userId: String
  postId: String
}

const PostCard = () => {
  const [showCommentSection, setshowCommentSection] = useState(false)
  const [allComment, setAllComment] = useState([])


  const formik = useFormik({
    initialValues:
    {
      comment: "",
      userId: "6890c32c2e55fd668c72b33f",
      postId: "68a34b41afdbe290716f48e2"
    },
    onSubmit: (values, { resetForm }) => {
      postComment(values)
      resetForm();
    }
  })

  const postComment = async (values: CommentPostValue) => {
    try {
      let res = await axios.post(
        "http://localhost:5000/api/comment/postComment",
        {
          ...values
        }
      )
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
      await axios.get(
        "http://localhost:5000/api/comment/getComment")
        .then((res) => {
          console.log(res, "Ppppppppppppp")
          setAllComment(res.data)
        }).catch((err) => {
          console.log(err)
        })
    }
  }


  return (
    <div className="p-5 w-fit m-5 rounded-xl shadow-md bg-[#fff]">
      <div className="flex gap-3">
        <img
          className="w-12 h-12 rounded-full"
          src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
          alt=""
        />
        <div className="flex flex-col">
          <span className="text-base">Abhishek</span>
          <span className="text-sm text-gray-400">Badnawar, MP</span>
        </div>
      </div>
      <img
        className="w-120 rounded mt-3"
        src="https://1.bp.blogspot.com/-KANgNmAXGGA/X9IHjMTivVI/AAAAAAAAAVA/VW6WFYFSPDM6ehwZarHB8Q5Y14r7_tp9wCLcBGAsYHQ/s1920/20201210_165103.jpg"
        alt=""
      />
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
