import { doc, getDoc, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../../lib/firebase'
import { useUserStore } from '../../../lib/userStore'
import AddUser from './addUser/AddUser'
import "./chatList.css"

const ChatList = () => {
  const [chats, setChats] = useState([]);
  const [addMode, setAddmode] = useState(false);
  const {currentUser} = useUserStore();

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
      const items = res.data().chats;
      const promises = items.map(async (item) => {
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data()
        return { ...item, user };
      });
      const chatData = await Promise.all(promises)
      setChats(chatData.sort((a,b) => b.updatedAt - a.updatedAt))
    });
    return () => {
      unSub()
    }
  }, [currentUser.id]);
  console.log(chats)
  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
          <img src="./search.png" alt="" />
          <input type="text" placeholder='Search' />
        </div>
        <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='add'
          onClick={() => setAddmode((prev) => !prev)} />
      </div>
      <div className='item'>
        <img src="./avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>

      </div>
      <div className='item'>
        <img src="./avatar.png" alt="" />
        <div className='texts'>
          <span>Jane Doe</span>
          <p>Hello</p>
        </div>

      </div>
      {chats.map((chat) => (
        <div className='item' key={chat.chatId}>
          <img src={chat.user.avatar || "./avatar.png" }alt="" />
          <div className='texts'>
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>

        </div>

      ))}
      {addMode && <AddUser />}
    </div>
  )
}

export default ChatList
