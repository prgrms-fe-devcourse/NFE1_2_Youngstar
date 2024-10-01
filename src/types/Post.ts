import User from "./User";

type Post = {
    likes: string[],
    comments: Comment[],
    _id: string,
    image?: string,
    imagePublicId?: string,
    title: String,
    author: User,
    createdAt: String,
    updatedAt: String
}

export default Post;