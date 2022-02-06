import React from 'react'
import { Headings, TextSize } from '~/global/types/Heading'
import { ReactChildren } from '~/global/types/React'
import { mergeClasses } from '~/global/utils/Styles'

type HeadingProps = {
	as?: Headings
	size?: TextSize
	className?: string
} & ReactChildren

function Heading({
	as = 'h1',
	size,
	className = '',
	children,
	...otherProps
}: HeadingProps & React.ComponentPropsWithoutRef<Headings>) {
	const TagName = as
	const fontSize = size || 'inherit'

	const classes = mergeClasses(fontSize, className)

	return (
		<TagName className={classes} {...otherProps}>
			{children}
		</TagName>
	)
}

export default Heading
