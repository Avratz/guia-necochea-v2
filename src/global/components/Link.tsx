import React from 'react'
import NextLink, { LinkProps } from 'next/link'

function Link({ children, ...otherProps }: React.PropsWithChildren<LinkProps>) {
	return (
		<NextLink {...otherProps}>
			<a
				className={
					//mobile
					`p-5` +
					//desktop
					``
				}
			>
				{children}
			</a>
		</NextLink>
	)
}

export default Link
