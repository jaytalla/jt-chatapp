import React from 'react'

const ChatSidebar = ({setIsLogin}) => {

    function Signout() {
        localStorage.clear('email');
        setIsLogin(false);
        console.log(localStorage.getItem('email'));
        window.location.reload();
    }

  return (
    <div className='h-screen w-[20%] bg-slate-950'>
        {/* MORE ON USER INFORMATION */}
        <div>
            <button onClick={() => Signout()}>LOGOUT</button>
        </div>

        {/* FRIEND LIST HERE  */}
        <div>

        </div>

        {/* PREVIOUS CHAT  */}
        <div>

        </div>
    </div>
  )
}

export default ChatSidebar