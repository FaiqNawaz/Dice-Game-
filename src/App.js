import { useState } from 'react';
import StartGame from './Components/StartGame' 
import GamePlay from './Components/GamePlay';

function App() {

  let [isGameStarted, setIsGameStarted ] = useState(true);

  const toggleGamePlay = () => {

    setIsGameStarted(prev => !prev);
  } ;
   

  return (
    <>
    
    {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    
    </>
  );
}

export default App;