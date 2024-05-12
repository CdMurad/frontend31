
import { useState } from 'react'
import Buttons from '../Buttons/Buttons'
import Numbers from '../Numbers/Numbers'


function MainContent() {
  const [counter,setCounter]= useState (0)

  
  
  
  
  return (
    <main>

    <Numbers counter={counter}/>
		<Buttons counter= {counter} setCounter={setCounter}/>
    
    </main>
    
	)
}

export default MainContent
