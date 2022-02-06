import React from 'react'
import IconButton from './IconButton'
import { BiMenu } from 'react-icons/bi'
import Link from './Link'
import Button from './Button'

function Nav() {
	return (
		<React.Fragment>
			<IconButton className='absolute z-10 top-4 right-4 lg:hidden' color='#FFF'>
				<BiMenu />
			</IconButton>
			<nav
				className={
					//mobile
					`hidden flex-col justify-center items-center w-full h-full absolute top-0 left-0 bg-fwhite ` +
					//desktop
					`lg:flex lg:flex-row lg:justify-end lg:h-10 lg:top-4 lg:right lg:bg-transparent text-white`
				}
			>
				<Link href='#'>Inicio</Link>
				<Link href='/comercios'>Comercios</Link>
				<Link href='/categorias'>Categorias</Link>
				<Link href='/sumate'>
					<Button primary>¡Sumate!</Button>
				</Link>
			</nav>
		</React.Fragment>
	)
}

export default Nav
