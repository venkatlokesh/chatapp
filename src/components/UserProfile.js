import React ,{ useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../reducer'
import ChatSideBar from './ChatSideBar'
import UserAnalytics from './UserAnalytics';

function UserProfile() {
    const profileDetails = useSelector(state => state.profileDetails);
    // const position = useSelector(state => state.position);
    // const role = useSelector(state => state.role);
    // const is_active = useSelector(state => state.is_active);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchUserProfile()) 
    }, [])
    return (
        <div>
            <h1>{profileDetails.name}</h1>
            <h2>{profileDetails.position}</h2>
            <h3>{profileDetails.role}</h3>
            <h4>{profileDetails.is_active}</h4>
            <ChatSideBar chatType="activeChats" />
            <ChatSideBar chatType="archivedChats"/>
            <UserAnalytics></UserAnalytics>
        </div>
    )
}

export default UserProfile
