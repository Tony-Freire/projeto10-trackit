import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import UserContext from "../contexts/UserContext"
import HabitsPage from "./habitsPage/HabitsPage"
import HomePage from "./homePage/HomePage"
import RegisterPage from "./registerPage/RegisterPage"
import TodayPage from "./todayPage/TodayPage"
import Footer from "./footer/Footer.js"
import Header from "./header/Header";



export default function App()
{
    const [onlineUser, setOnlineUser] = useState();
    
    return(
        <UserContext.Provider value={{onlineUser,setOnlineUser}}>  
      <BrowserRouter>
      {onlineUser?<Header></Header>:<></>}
      <Routes>   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cadastro" element={<RegisterPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/habito" element={<HabitsPage/>}/>
      </Routes>
      {onlineUser ? <Footer /> : <></>}

      </BrowserRouter>
      </UserContext.Provider>    	
    )
}