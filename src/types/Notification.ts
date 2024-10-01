import Comment from "./Comment";
import User from "./User";

type Notification = {
    seen: boolean,
    _id: string,
    author: User,
    user: User | string,
    post: string | null, // 포스트 id
    follow?: string, // 사용자 id
    comment?: Comment,
    message?: string, // 메시지 id
    createdAt: string,
    updatedAt: string
}

export default Notification;