import React from 'react'
import Icon from '~/global/components/Icon'

type IconButon = React.ComponentPropsWithoutRef<'a'> & {
	theme?: 'transparent' | 'primary'
	color?: string
}

function IconButton({ children, className, theme, color, ...otherProps }: IconButon) {
	return (
		<a href='' className={`w-11 h-11 ${className}`} {...otherProps}>
			<Icon color={color}>{children}</Icon>
		</a>
	)
}

export default IconButton
