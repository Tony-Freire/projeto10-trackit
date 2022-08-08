import styled from "styled-components"

export default function HistoricPage() {
    return (
        <Container>
            <Title>Histórico</Title>

            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
    )
}
const Container = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    height: 100%;
    padding: 0 17px 150%;
    padding-top: 100px;
    box-sizing: border-box;
    &p{font-size: 18px;
    color: #666666;
    text-decoration-line: none;
    };
`
const Title = styled.p`
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
    color: #126BA5;
    font-size: 22px;
    margin-bottom: 30px;
`