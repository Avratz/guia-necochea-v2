import React from 'react'
import NextLink, { LinkProps } from 'next/link'

function Link({ children, ...otherProps }: React.PropsWithChildren<LinkProps>) {
	return (
		<NextLink {...otherProps}>
			<a>{children}</a>
		</NextLink>
	)
}

export default Link
