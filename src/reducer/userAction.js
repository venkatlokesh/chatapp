import { FETCH_USER_PROFILE,FETCH_USER_ARCHIVED_CHATS,FETCH_USER_ACTIVE_CHATS,FETCH_USER_STATS,FETCH_USER_WEEKLY_STATS } from './userActionTypes';

export const fetchUserProfile = () => {
    return {
        type: FETCH_USER_PROFILE
    }
};

export const fetchUserActiveChats = () =>{
    return {
        type: FETCH_USER_ACTIVE_CHATS
    }
};

export const fetchUserArchivedChats = () =>{
    return {
        type: FETCH_USER_ARCHIVED_CHATS
    }
};

export const fetchUserStats = () => {
    return {
        type: FETCH_USER_STATS
    }
}

export const fetchUserWeeklyStats = () =>{
    return {
        type:FETCH_USER_WEEKLY_STATS
    }
}

