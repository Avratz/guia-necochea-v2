import React from 'react'
import { IconContext } from 'react-icons'

function Icon({
	className = '',
	color,
	children,
	...otherProps
}: React.ComponentPropsWithoutRef<'i'>) {
	return (
		<IconContext.Provider value={{ size: '2.75rem', color }}>
			<i className={`w-11 h-11 ${className}`} {...otherProps}>
				{children}
			</i>
		</IconContext.Provider>
	)
}

export default Icon
