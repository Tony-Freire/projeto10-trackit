import axios from "axios";
import { useState } from "react" 
import styled from "styled-components";
import { ThreeDots } from 'react-loader-spinner';
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";

export default function RegisterPage()
{
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })
    const [disabled, setDisabled] = useState(false);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

    function submitRegiter(e)
    {
      e.preventDefault();
      const promise = axios.post(URL,newUser);

      promise.then(() => {
        setDisabled(false);
        navigate("/");
      });

      promise.catch((error) => {
        setDisabled(false);
        alert(`Não foi possível efetuar o cadastro. Erro ${error.response.status}: ${error.response.data.message}`);
    } )    
  
    }


    return(
        <>
        <Container>
        <img alt="logo.svg" src={Logo}/>
        <Form onSubmit={submitRegiter}>
        <Input
            type="email"
            placeholder="email"
             onChange={(e => setNewUser({ ...newUser, email: e.target.value }))} 
             value={newUser.emailemail}
             disabled={disabled}
            required

          />
          <Input
            type="password"
            placeholder="senha"
            onChange={e => setNewUser({ ...newUser, password: e.target.value })}
            value={newUser.password}
            disabled={disabled}
            required
          />
           <Input
            type="text"
            placeholder="nome"
            onChange={e => setNewUser({ ...newUser, name: e.target.value })}
            value={newUser.name}
            disabled={disabled}
            required
          />
          <Input
            type="url"
            placeholder="foto"
            onChange={e => setNewUser({ ...newUser, image: e.target.value })}
            value={newUser.image}
            disabled={disabled}
            required
          />
          
          <Button type="submit" setDisabled={disabled}>
            {disabled ?
              <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
            :
              "Cadastrar"
            }
          </Button>

        </Form>
        <Hlink to="/">
          Já tem uma conta? Faça login!
        </Hlink>
        </Container>
        </>
    )
}
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
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 33px 0 25px;
`;const Input = styled.input`
width: 303px;
height: 45px;  

background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"};

pointer-events: ${(props) => props.disabled ? "none" : "all"};

border: 1px solid #D5D5D5;
border-radius: 5px;

box-sizing: border-box;

margin-bottom: 6px;
padding: 10px;

font-size: 19.976px;
line-height: 25px;

color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"};

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
const Hlink = styled(Link)`
  font-size: 13.976px;
  line-height: 17px;
  text-decoration-line: underline;
  color: #52B6FF;
`;
