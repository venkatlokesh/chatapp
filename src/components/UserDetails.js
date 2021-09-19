import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserAdditionalDetails } from '../reducer';

function UserDetails() {
    const additionalDetails = useSelector(state=>state.additionalProfileDetails);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUserAdditionalDetails());
    }, [])

    return (
        <div>
            <h1>email:{additionalDetails.email}</h1>
            <h2>company:{additionalDetails.company}</h2>
            <h3>city:{additionalDetails.city}</h3>
            <h4>country:{additionalDetails.country}</h4>
        </div>
    )
}

export default UserDetails;
