import styled from 'styled-components';
import TrackltLogo from"./../../assets/images/TrackltLogo.svg";

export default function HomePage()
{
    return( 
        <Container>
          <Home>
        <img src={TrackltLogo}></img>
        </Home>
        </Container>    
    )
}
const Container = styled.div`
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Home = styled.div`
height: 400px;
top: 0; bottom: 0;
left: 0; right: 0;
margin: auto;

display: flex;
justify-content: center;
align-items: center;

flex-direction: column;
img
{ 
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`