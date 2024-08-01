import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'

const GamePlay = ({selectedNumber,setSelectedNumber}) => {

  

  const [currentDice, setcurrentDice] = useState(1);

  
  
  return (

    <MainContainer>

      <div className = 'top_Section'>

      <TotalScore/>

      <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>

      </div>
        
      <RollDice currentDice={currentDice} setcurrentDice={setcurrentDice}/>

     </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`

padding-top: 70px;
  
  .top_Section{

    display: flex;
    align-items: end;
    justify-content: space-around;


  }

`