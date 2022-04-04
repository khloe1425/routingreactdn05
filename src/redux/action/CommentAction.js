import { ADD_COMMENT } from "../type/CommentActionType"

// action creator
export const addCommentAction  = (user) => {
    return {
        type: ADD_COMMENT,
        user: {...user, avatar:`https://i.pravatar.cc/150?u=${user.name}`}
    }

}




