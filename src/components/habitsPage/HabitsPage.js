import { useContext, useEffect, useState } from "react"
import { ThreeDots } from 'react-loader-spinner';
import styled from "styled-components"
import axios from "axios";
import DayofWeek from "../dataHabits/DayofWeek";
import Habit from "../dataHabits/Habit";
import UserContext from "../../contexts/UserContext";


export default function HabitsPage() {

    const { onlineUser} = useContext(UserContext);
    const [habitsList, setHabitsList] = useState([]);
    const [addHabit, setAddHabit] = useState(false);
    const [habitDescription, sethabitDescription] = useState("")
    const [weekDaysList, setWeekDaysList] = useState([])

    const [disabled, setDisabled] = useState(false)

    const config = {
        headers: {
            Authorization: "Bearer " + onlineUser.token
        }
    }
    useEffect(() => {
        getHabits()
    }, [])

    function getHabits() {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then(answer => setHabitsList(answer.data))
            .catch(error => alert("Estamos com problema no servidor. Tente novamente mais tarde."))
    }

    function submitForm(event) {
        event.preventDefault();
        const habit = {
            name: habitDescription,
            days: weekDaysList
        };
        setDisabled(true);

        if(weekDaysList.length === 0) {
            alert('Escolha ao menos um dia!')
            setDisabled(false);
            return;
        }

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habit, config)
            .then((answer) => {
                getHabits();
                sethabitDescription("");
                setWeekDaysList([]);
                enableAddHabit();
                setDisabled(false);
            })
            .catch((error) => console.log(error))
    }

    function enableAddHabit() {
        setAddHabit(!addHabit)
    }

    function getAddTask() {
        return (
            <Form onSubmit={submitForm}>
                <FormInput placeholder="nome do hábito" type='text' value={habitDescription} onChange={e => sethabitDescription(e.target.value)} />
                <WeekdaysList>
                    <DayofWeek day='D' id='0' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <DayofWeek day='S' id='1' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <DayofWeek day='T' id='2' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <DayofWeek day='Q' id='3' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <DayofWeek day='Q' id='4' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <DayofWeek day='S' id='5' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <DayofWeek day='S' id='6' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                </WeekdaysList>

                <ButtonsRow>
                    <Cancel onClick={enableAddHabit} >Cancelar</Cancel>
                    <SaveButton disabled={disabled}>{disabled ? <ThreeDots color="white" height={80} width={50} />
                    : "Salvar"}</SaveButton>
                </ButtonsRow>
            </Form>
        )
    }

    return (
        <Container>
            <Top>
                <Title>Meus hábitos</Title>
                <Button onClick={enableAddHabit}>+</Button>
            </Top>

            {addHabit ? getAddTask() : <></>}

            {habitsList[0] ?
                <>
                    {habitsList.map((habit) => {return(<Habit name={habit.name} id={habit.id} days={habit.days} config={config} getHabitsList={getHabits} />)})}
                </>
                : <p>Você não tem nenhum hábito cadastrado ainda. Adicione um novo hábito para começar a trackear!</p>}
        </Container>
    )
}

const WeekdaysList = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin-top: 8px;
`

const FormInput = styled.input`
    width: 90%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;
    color: #666666;
    display: flex;
    align-items: center;
    margin-top: 6px;
    padding-left: 10px;
    ::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }
    &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
        border: 1px solid #D5D5D5;;
    }
`

const Cancel = styled.button`
    color: #52B6FF;
    font-size: 16px;
    border: 0;
    background-color: white;
    margin-right: 23px;
`

const ButtonsRow = styled.div`
    display: flex;
    margin-top: 30px;
    width: 90%;
    justify-content: flex-end;
`

const SaveButton = styled.button`
    background-color: #52B6FF;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: 0;
    color: white;
    font-size: 16px;
    &:disabled {
        background-color: #86ccff;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    margin-bottom: 30px;
    border-radius: 5px;
    background-color: white;
    
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: 0;
    font-size: 27px;
    color: white;
    margin-bottom: 30px;
    &:hover{
        cursor: pointer;
    }
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div`
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
    background-color: rgb(229, 229, 229);
    width: 100%;
    height: 100%;
    padding: 100px 18px 150%;
    box-sizing: border-box;
    &p{
        font-size: 18px;
        color: #666666;
    }
`

const Title = styled.p`
    color: #126BA5;
    font-size: 22px;
    margin-bottom: 30px;
`