import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

function Header({ logoBlack = false }: { logoBlack?: boolean }) {
	const [isOpen, setIsOpen] = React.useState(false)
	return (
		<header className='lg:relative lg:m-auto'>
			<Logo className='absolute z-10 top-4 left-4' black={logoBlack} />
			<Nav />
		</header>
	)
}

export default Header
