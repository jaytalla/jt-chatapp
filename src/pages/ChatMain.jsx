import React, { useEffect, useState } from 'react'
import ChatSidebar from '../components/ChatSidebar'
import ChatCont from '../components/ChatCont'

const ChatMain = ({CheckIfLogin, isLoggedIn}) => {
    // CHECK IF USER IS LOGIN OR LOGOUT
    useEffect(() => {
      // CheckIfLogin();
        // alert(val);
    },[])

  return (
    <div className='flex flex-row justify-center items-center text-white text-4xl w-full h-fit bg-slate-900'>
        {/* <h1>Hello! Welcome!</h1> */}
        <ChatSidebar setIsLogin={() => CheckIfLogin}/>
        <ChatCont />
    </div>
  )
}

export default ChatMain