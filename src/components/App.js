import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react';
import UserContext from "../contexts/UserContext"
import HabitsPage from "./habitsPage/HabitsPage"
import HomePage from "./homePage/HomePage"
import RegisterPage from "./registerPage/RegisterPage"
import TodayPage from "./todayPage/TodayPage"



export default function App()
{
    const [onlineUser, setOnlineUser] = useState();
    return(
        <UserContext.Provider value={{onlineUser,setOnlineUser}}>  
      <BrowserRouter>
      {/* <Header></Header> */}
      <Routes>   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/cadastro" element={<RegisterPage/>}/>
        <Route path="/hoje" element={<TodayPage/>}/>
        <Route path="/sucesso" element={<HabitsPage/>}/>
      </Routes>

      </BrowserRouter>
      </UserContext.Provider>    	
    )
}