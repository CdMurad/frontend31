import Span from '../Span/Span'
import Copirathing from '../Copirathing/Copirathing'
import Footermenu from '../Footermenu/Footermenu'

function Footer() {
  return (
		<footer className='footer'>
			<div className='footer-span'>
				<Span/>
			</div>
      <div className='footer-list'>
        <Footermenu/>
      </div>
      <Copirathing/>
		</footer>
	)
  
}

export default Footer