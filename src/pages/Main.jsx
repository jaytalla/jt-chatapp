import React, { useEffect, useState } from 'react'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ChatMain from './ChatMain';

const Main = () => {
    const [isLogin, setIsLogin] = useState(false);
    // FOR FUTURE DEV I MIGHT ADD AUTO LOGIN HERE WHEN USER SAVE ACCOUNT TO WEB
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [currentPage, setCurrentPage] = useState(0);

    function SetCurrentPage(val) {
        setCurrentPage(val);
    }

    const SetAuth = (val) => {
        setIsAuthenticated(val);
    }

    useEffect(() => {
        CheckIfUserIsLogin();
        // alert(val);
    },[isLogin])

    const  CheckIfUserIsLogin = () => {
        const val = localStorage.getItem('email');
        if (val != null) {
            setIsLogin((prev) => prev = true);
        } else {
            setIsLogin((prev) => prev = false);
        }
        // alert(val);
    }

    function SetLoginTo (val) {
        setIsLogin(val);
    }

  return (
    <div>
        {
            isAuthenticated === true ? <ChatMain /> 
            : currentPage === 0 ? isLogin === true ? <ChatMain CheckIfLogin={() =>SetLoginTo} /> :  <LoginPage setIsAuthenticated={SetAuth} setCurrentPage={SetCurrentPage} /> : <SignupPage setCurrentPage={SetCurrentPage} />
        }
    </div>
  )
}

export default Main