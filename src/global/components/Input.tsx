import React from 'react'
import { mergeClasses } from '~/global/utils/Styles'

type InputType = {
	rounded?: boolean
} & React.ComponentPropsWithoutRef<'input'>

function Input({ className = '', rounded, ...otherProps }: InputType) {
	const inputClass = mergeClasses(
		'w-full h-12 px-4 py-2 bg-fwhite border-1 border-gray-200 focus:border-gray-300 focus:outline-none shadow-',
		rounded ? 'rounded-full' : 'rounded-xl',
		'lg:max-w-lg',
		className,
	)
	return <input className={inputClass} {...otherProps} />
}

export default Input
