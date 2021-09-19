import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {fetchUserActiveChats,fetchUserArchivedChats} from '../reducer';
import FriendProfile from './FriendProfile';

function ChatSideBar(props) {
    const {chatType} = props;
    const chats = useSelector(state => state[chatType]);
    let numOfChats = chats && chats.length;
    const dispatch = useDispatch();
    const [friendProfile,setFriendProfile]=useState([]);
    const [showChats, setShowChats ] = useState(false);

    useEffect(() => {
      if(chatType==="activeChats"){
        dispatch(fetchUserActiveChats())
        setFriendProfile(chats[0]);
        console.log(friendProfile);
      }
      else{
        dispatch(fetchUserArchivedChats())
      }
        console.log(chats[0]);
    }, [dispatch])
    
    const listOfChats = () => {
        console.log(chats)
        setShowChats(!showChats);
        }
    return (
        <div>
                 {
                chatType==="activeChats" ? (
                    <h1>Active Conversations - {numOfChats}</h1>):(
                    <h1>Archived Conversations - {numOfChats}</h1>)
                }
            <button onClick={()=>listOfChats()}>^</button>
            {
                showChats && (
                    chats.map((chat,index)=>{
                        return <button key={index} onClick={()=>setFriendProfile(chat)}>{chat.name}</button>
                    })
                )
            }
             { ( <FriendProfile profile={friendProfile} />)}
        </div>
    )
}

export default ChatSideBar;
