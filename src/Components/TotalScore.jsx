import React from 'react'
import styled from 'styled-components';


const TotalScore = ({selectedNumber, RandomNumber , score}) => {
  return (
    
        <ScoreContainer>

            <h1> 0 </h1>

            <p>Total Score</p>

            </ScoreContainer>

    
  );
}

export default TotalScore

const ScoreContainer = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   max-width: 200px;
   
    h1{
        font-size: 100px;
        line-height: 100px;

    }
    p{
        font-size: 24px;
        font-weight: 500;
       
    }

`;