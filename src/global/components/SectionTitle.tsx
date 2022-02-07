import React from 'react'
import Heading from './Heading'

function SectionTitle({
	children,
	className,
	...otherProps
}: React.ComponentPropsWithoutRef<'h2'>) {
	return (
		<React.Fragment>
			<Heading as='h2' className='text-4xl font-bold text-gray-700 my-2' {...otherProps}>
				{children}
			</Heading>
			<div className='w-14 h-1 bg-primary-400'></div>
		</React.Fragment>
	)
}

export default SectionTitle
