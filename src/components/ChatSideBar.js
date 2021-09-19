import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, fetchUserActiveChats,fetchUserArchivedChats} from '../reducer';

function ChatSideBar(props) {
    const {chatType} = props;
    // const archivedChats = useSelector(state => state.archivedChats);
    // const activeChats = useSelector(state => state.activeChats);
    // let numOfactiveChats = activeChats && activeChats.length;
    // let numOfarchivedChats = archivedChats && archivedChats.length;
    // let numOfChats = (chatType == "Active" ? numOfactiveChats: numOfarchivedChats)
    const chats = useSelector(state => state[chatType]);
    let numOfChats = chats && chats.length;
    const dispatch = useDispatch()
    const [showChats, setShowChats ] = useState(false);
    useEffect(() => {
        chatType=="activeChats" ?
        dispatch(fetchUserActiveChats()) :
        dispatch(fetchUserArchivedChats())
    }, [])
    const listOfChats = () => {
        console.log(chats)
        setShowChats(true);
        }
        console.log(showChats)
    return (
        <div>
                 {
                chatType=="activeChats" ? (
                    <h1>Active Conversations - {numOfChats}</h1>):(
                    <h1>Archived Conversations - {numOfChats}</h1>)
                }
            <button onClick={()=>listOfChats()}>^</button>
            {
                showChats && (
                    chats.map((chat)=>{
                        return <li>{chat.name}</li>
                    })
                )
            }
        </div>
    )
}

export default ChatSideBar;
