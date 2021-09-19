import { fetchUser } from "./userAction";
import { FETCH_USER_PROFILE, FETCH_USER_ARCHIVED_CHATS, FETCH_USER_ACTIVE_CHATS } from "./userActionTypes";
const initialState = {
    profileDetails: {},
    activeChats: [],
    archivedChats: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return {
                ...state,
                profileDetails: {
                    name: "Bill BradFord",
                    position: "lead",
                    role: "UX/UI Designer",
                    is_active:true
                },
            }
        case FETCH_USER_ACTIVE_CHATS:
            return {
                ...state,
                activeChats: [
                    {
                        name: "Henry Boyd",
                        position: "position1",
                        gmail: "sample1@sample1.com"
                    }
                ]
            }
        case FETCH_USER_ARCHIVED_CHATS:
            return {
                ...state,
                archivedChats: [
                    {
                        name: "chat2",
                        position: "position2",
                        gmail: "sample2@sample2.com"
                    }
                ]
            }
        default:
            return {
                ...state,
            }
    }
}

export default userReducer;
