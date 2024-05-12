import button from '../../assets/images/button.png'

function Buttons({counter,setCounter}){
	function plus() {
    
		return setCounter(counter + 3)
	}
	function minus() {
		return setCounter(counter - 2)
	}
	if (counter < 0) {
		return setCounter(0)
	}
	function again() {
		return setCounter(0)
	}

	return(
		<div className='Main'>
			<button className='plus' onClick={plus}>
				+
			</button>
			<button className='medium' onClick={again}>
				<img src={button} alt='button' />
			</button>
			<button className='minus' onClick={minus}>
				-
			</button>
		</div>
	)
}

export default Buttons
