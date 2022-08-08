import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./homePage/HomePage.js";
import HabitsPage from "./habitsPage/HabitsPage.js";
import RegisterPage from "./registerPage/RegisterPage.js";
import TodayPage from "./todayPage/TodayPage.js";




export default function App()
{
    return (
        <BrowserRouter>
        <Routes>   
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/habits/" element={<HabitsPage/>}/>
          <Route path="/today" element={<TodayPage/>}/>
        </Routes>
  
        </BrowserRouter>
    )
}