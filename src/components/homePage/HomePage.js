import Logo from "./../../assets/img/logo.svg"
import { useState, useEffect, useContext } from "react"
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";
import UserContext from "../../contexts/UserContext";
import  {ThreeDots}  from 'react-loader-spinner';


export default function HomePage()
{   
    const navigate = useNavigate();
    const { setOnlineUser } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"

    function Login(e) {
        e.preventDefault()
        const user = { email: email, password: password }
        setDisabled(true);
        const promisse = axios.post(URL,user);

        promisse.then(answer => {
            setOnlineUser(answer.data)
            navigate("/hoje")})
        promisse.catch(error => {
            setDisabled(false);
            alert("Login ou senha incorretos! Tente novamente.")
        })
    }
    return(
        <>
        <Container>
        <img alt="logo.svg" src={Logo}/>
        <Form onSubmit={Login}> 
        <Input 
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={disabled}
           />
           <Input
           type="password"
           placeholder="senha"
           onChange={(e) => setPassword(e.target.value)}
           value={password}
           disabled={disabled}           
         />
         <Button type="submit" disabled={disabled}>
            {disabled ?
              <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
            :
              "Entrar"
            }
          </Button>
          <Hlink to="/cadastro">
          Não tem uma conta? Cadastre-se!
        </Hlink>

        </Form> 
        </Container>
        </>
    )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 33px 0 25px;
`;
const Input = styled.input`
  width: 303px;
  height: 45px;
  background-color: ${props => props.disabled ? "#F2F2F2" : "#FFFFFF"};
  pointer-events: ${props => props.disabled ? "none" : "all"};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  box-sizing: border-box;
  margin-bottom: 6px;
  padding: 10px;
  font-size: 19.976px;
  line-height: 25px;
  color: ${props => props.disabled ? "#AFAFAF" : "#666666"};

  &::placeholder{
    color: #DBDBDB;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 303px;
  height: 45px;

  opacity: ${(props) => props.disabled ? 0.7 : 1};

  pointer-events: ${(props) => props.disabled ? "none" : "all"};

  background: #52B6FF;

  border: none;
  border-radius: 4.63636px;

  font-size: 20.976px;
  line-height: 26px;
  text-align: center;

  color: #FFFFFF;

  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img{
    margin-top: 68px;
  }

  @media screen and (min-width: 800px) {
    img{
      margin-top: 100px;
    }
  }
`;
const Hlink = styled(Link)`
  font-size: 13.976px;
  line-height: 17px;
  text-decoration-line: underline;

  color: #52B6FF;
`
