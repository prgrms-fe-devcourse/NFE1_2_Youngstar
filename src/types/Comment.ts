import User from "./User";

type Comment = {
    _id: string,
    comment: string,
    author: User,
    post: string,
    createdAt: string,
    updatedAt: string
}

export default Comment;