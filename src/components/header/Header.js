import styled from "styled-components"
import { useContext } from "react"
import UserContext from "../../contexts/UserContext";
import logo from "./../../assets/img/logo-pequena.svg"


export default function Header()
{
    const { onlineUser } = useContext(UserContext);
    return(
        <>
        <HeaderStyle>
            <Logo src={logo} alt="" />
            <User src={onlineUser.image} alt='' />
        </HeaderStyle>
        </>
    )
}

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    position: fixed;
    top: 0;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`
 
const Logo = styled.img`
    height: 35px;
    width: 90px;
`

const User = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;`