import Like from "./Like";
import Message from "./Message";
import Post from "./Post";

type User = {
    coverImage: string,
    image: string,
    role: string,
    isOnline: boolean,
    posts: Post[],
    likes: Like[],
    comments: string[],
    followers: [],
    following: [],
    notifications: Notification[],
    messages: Message[],
    _id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string
}

export default User;