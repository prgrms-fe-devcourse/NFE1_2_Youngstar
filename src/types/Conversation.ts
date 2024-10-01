import User from "./User";

type Conversation = {
    _id: string[],
    message: string,
    sender: User,
    receiver: User,
    seen: boolean,
    createdAt: string
}

export default Conversation;