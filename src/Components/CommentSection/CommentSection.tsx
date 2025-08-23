type Comment = {
    id: number;
    comment: string;
    userId: string;
    postId: string;
};

interface CommentSectionProps {
    comment: Comment;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comment: comment }) => {
    console.log(comment, "commentcomment")
    return (
        <div className="pb-2 pt-1 flex items-center justify-items-center">
            <div>
                <img
                    className="w-6 h-6 rounded-full"
                    src="https://wallpapers.com/images/hd/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
                    alt=""
                />
            </div>
            <div className="grid pl-3">
                <span className="text-xs">Nisha Sharma</span>
                <span className="text-sm">{comment.comment}</span>
            </div>
        </div>
    )
}

export default CommentSection