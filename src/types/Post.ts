import Channel from "./Channel";
import Like from "./Like";
import User from "./User";

type Post = {
    likes: Like[],
    comments: Comment[],
    _id: string,
    image?: string,
    imagePublicId?: string,
    title: String,
    channel: Channel,
    author: User,
    createdAt: String,
    updatedAt: String
}

export default Post;