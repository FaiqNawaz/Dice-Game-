import React, { useState } from 'react'
import styled from 'styled-components';



const RollDice = ({currentDice, setcurrentDice, selectedNumber}) => {

   

    const [score,setScore] = useState(0);

    const RandomNumberGenerator = (min, max) => {

      return Math.floor(Math.random()* (max-min) + (min));
             
    }

    
    
    const RollDice = () => {
    
        const RandomNumber = RandomNumberGenerator(1,7);
        
    
        setcurrentDice(RandomNumber);

        if(selectedNumber === RandomNumber){

            setScore({score} + RandomNumber)
            
            
        }
        else{
    
            setScore({score}-2);
            
        }
        
        console.log({score});
            
    
    
    }
    
    
    
       
  return (

    <DiceContainer>

        <div className='Dice' onClick={RollDice}>

            <img src={`/Images/dice/dice_${currentDice}.png`} alt='dice'></img>

        </div>

        <p>Click on Dice to roll</p>
      
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
margin-top: 48px;

p{
    font-size: 24px;
}

.Dice{
    cursor: pointer;
}
    
`
