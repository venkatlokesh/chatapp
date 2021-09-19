import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserStats,fetchUserWeeklyStats } from '../reducer';
function UserAnalytics() {
    const stats = useSelector(state=>state.stats);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserStats());
        dispatch(fetchUserWeeklyStats());
    }, [])
    return (
        <div>
            <h1>Time:{stats.time}</h1>
            <h2>Meetings:{stats.meetings}</h2>
            <h3>Attended:{stats.attended}</h3>
            <h4>Rejected:{stats.rejected}</h4>
        </div>
    )
}

export default UserAnalytics
