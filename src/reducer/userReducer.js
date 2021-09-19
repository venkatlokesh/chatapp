import { FETCH_USER_PROFILE, FETCH_USER_ARCHIVED_CHATS, FETCH_USER_ACTIVE_CHATS,FETCH_USER_STATS,FETCH_USER_WEEKLY_STATS,FETCH_USER_ADDITIONAL_DETAILS} from "./userActionTypes";
const initialState = {
    profileDetails: {},
    activeChats: [],
    archivedChats: [],
    stats:{},
    weeklyStats:{},
    additionalProfileDetails:{}
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
                        email: "sample1@sample1.com"
                    },
                    {
                        name: "Henry Boyd2",
                        position: "position2",
                        email: "sample1@sample2.com"
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
                        email: "sample2@sample2.com"
                    }
                ]
            }
        case FETCH_USER_STATS:
            return {
                ...state,
                stats:{
                    time:1800,
                    attended:200,
                    meetings:130,
                    rejected:20
                }
            }
        case FETCH_USER_WEEKLY_STATS:
            return {
                ...state,
                weeklyStats:{
                    Monday:100,
                    Tuesday:200,
                    Wednesday:150,
                    Thurday:200,
                    Friday:270,
                    Saturday:130,
                    Sunday:200
                }
            }
        case FETCH_USER_ADDITIONAL_DETAILS:
            return {
                ...state,
                additionalDetails:{
                    email:"BillBradFord@sample.com",
                    companyName:"sampleCompany",
                    city:"SampleCity", 
                    Country:"SampleCountry"
                }
            }

        default:
            return {
                ...state,
            }
    }
}

export default userReducer;
