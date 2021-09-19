import React ,{ useEffect }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile } from '../reducer'

function UserProfile() {
    const profileDetails = useSelector(state => state.profileDetails);
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(fetchUserProfile()) 
    }, [dispatch])
    return (
        <div>
            <h1>{profileDetails.name}</h1>
            <h2>{profileDetails.position}</h2>
            <h3>{profileDetails.role}</h3>
            <h4>{profileDetails.is_active}</h4>
        </div>
    )
}

export default UserProfile
