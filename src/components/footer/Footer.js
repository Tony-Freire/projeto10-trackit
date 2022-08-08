import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
import 'react-circular-progressbar/dist/styles.css';

export default function Footer()
{
    const percentage = 100;

    return (
        <FooterStyle>
            <Link to='/habito'><Hlink>Hábitos</Hlink></Link>
            <div style={{width: '91px', height: '91px', marginBottom: '40px'}}>
                <Link to='/hoje'><CircularProgressbar value={percentage} text={"Hoje"} /></Link>
            </div>
            <Link to='/historico'><Hlink>Histórico</Hlink></Link>
        </FooterStyle>)
}
const Hlink = styled.p`
    font-size: 18px;
    color: #52b6ff;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
`

const FooterStyle = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around`;
