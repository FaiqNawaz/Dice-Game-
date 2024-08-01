import React from 'react'
import styled from 'styled-components';


const StartGame = ({toggle}) => {
  return (
    <Container>

        <div>

        <img src='/Images/dices.png' alt='dice'></img>

        </div>
        
        <div>
            <h1 className='content'>Dice Game</h1>

            <Button onClick ={toggle}> Play Now </Button>

        </div>

    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    margin: 0 auto;
    align-items: center;

     .content {
        
        font-size: 96px;
        white-space: nowrap;
        
    }
`

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px 18px;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;


    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
    }
`
