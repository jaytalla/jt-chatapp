import React, { useState } from 'react'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import ChatMain from './ChatMain';

const Main = () => {

    // FOR FUTURE DEV I MIGHT ADD AUTO LOGIN HERE WHEN USER SAVE ACCOUNT TO WEB
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [currentPage, setCurrentPage] = useState(0);

    function SetCurrentPage(val) {
        setCurrentPage(val);
    }

    const SetAuth = (val) => {
        setIsAuthenticated(val);
    }

  return (
    <div>
        {
            isAuthenticated === true ? <ChatMain /> 
            : currentPage === 0 ? <LoginPage setIsAuthenticated={SetAuth} setCurrentPage={SetCurrentPage} /> : <SignupPage setCurrentPage={SetCurrentPage} />
        }
    </div>
  )
}

export default Main