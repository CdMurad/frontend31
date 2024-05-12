import logo from '../../assets/images/logo.png'
import Menu from '../Menu/Menu.jsx'


function Header() {
	return (
		<header className='Header'>
			<img src={logo} alt='logo' />
    <Menu/>
		</header>
	)
}

export default Header
