import React from 'react'
import { mergeClasses } from '~/global/utils/Styles'
import type { ButtonProps } from '~/global/types/Button'

const defaultElement = 'button'

function Button<E extends React.ElementType = typeof defaultElement>({
	children,
	as,
	primary = false,
	secondary = false,
	destructive = false,
	className = '',
	...otherProps
}: ButtonProps<E>) {
	const TagName = as || defaultElement
	const baseBtnClass = `
		block 
		min-w-[150px] h-[44px] 
		rounded-[32px] px-[15px] py-[10px] 
		text-white text-center
		shadow-md 
		hover: shadow
		active:shadow-none transition-shadow 
	`
	const buttonClass = mergeClasses(
		baseBtnClass,
		primary
			? 'bg-gradient-to-r from-primary-400 to-primaryAlt-300 hover:bg-gradient-to-r hover:from-primary-500 hover:to-primaryAlt-400 active:bg-gradient-to-r active:from-primary-600 active:to-primaryAlt-500'
			: secondary
			? 'bg-primary-100 text-primary-500'
			: destructive
			? 'bg-red-500'
			: '',
		className,
	)
	return (
		<TagName className={buttonClass} {...otherProps}>
			{children}
		</TagName>
	)
}

export default Button
