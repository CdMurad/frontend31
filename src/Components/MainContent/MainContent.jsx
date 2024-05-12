
import { useState } from 'react'
import button from '../../assets/images/button.png'


function MainContent() {
  const [counter,setCounter]= useState  (0)
  function plus () {
    return setCounter (counter+3)
  }
  function minus() {
    return setCounter (counter-2)   
  }if (counter < 0) {
    return setCounter (0)
  }
  function again () {
    return setCounter (0)
  }
  
  
  
  
  return (
    <>
    <div className='Main-num'>
    <span>{counter}</span>

    </div>
		<div className='Main'>
			<button className='plus' onClick={plus}>+</button>
			<button className='medium' onClick={again}>
				<img src={button} alt='button' />
			</button>
			<button className='minus' onClick={minus}>-</button>
		</div>
    </>
	)
}

export default MainContent
