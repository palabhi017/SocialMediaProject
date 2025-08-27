import UserProfileImage from "../UserProfileImage/UserProfileImage";

type TComment = {
  id: number;
  user: any;
  comment: string;
  userId: string;
  postId: string;
};

interface CommentSectionProps {
  comment: TComment;
}

const CommentSection = ({ comment }: CommentSectionProps) => {
  console.log(comment, "commentcomment");
  return (
    <div className="pb-2 pt-1 flex items-center justify-items-center">
      <div>
        <UserProfileImage
          size={"20px"}
          fontSize={"xs"}
          Image={comment?.user?.ProfileImg}
        />
      </div>
      <div className="grid pl-3">
        <span className="text-xs">{comment?.user?.Name}</span>
        <span className="text-sm">{comment?.comment}</span>
      </div>
    </div>
  );
};

export default CommentSection;
