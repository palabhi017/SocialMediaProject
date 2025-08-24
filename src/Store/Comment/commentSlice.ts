import { createSlice } from "@reduxjs/toolkit"
 
const commentInitialState = {
    comment: "",
    userID: "",
    postID: "",
    commentsLoading: false,
    commentsError: false,
    error: ""
}

export const commentSlice = createSlice({
    name: "Comments",
    initialState: commentInitialState,
    reducers: {
        commentLoading: (state) => {
            state.commentsLoading = true
            state.commentsError = false
        },
        commentSuccess: (state, action) => {
            state.commentsLoading = false
            state.commentsError = false
            state.comment = action.payload.comment
            state.postID = action.payload.postID
            state.userID = action.payload.userID
        },
        commentError: (state, action) => {
            state.error = action.payload.error,
                state.commentsLoading = false
            state.commentsError = true
        }
    }
})

export const {commentLoading,commentSuccess,commentError}=commentSlice.actions
export default commentSlice.reducer