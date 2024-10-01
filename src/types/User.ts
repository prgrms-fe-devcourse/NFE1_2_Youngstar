import Post from "./Post";

type User = {
    coverImage: string,
    image: string,
    role: string,
    isOnline: boolean,
    posts: Post[],
    likes: string[],
    comments: string[],
    followers: [],
    following: [],
    notifications: Notification[],
    _id: string,
    fullName: string,
    email: string,
    createdAt: string,
    updatedAt: string
}

export default User;