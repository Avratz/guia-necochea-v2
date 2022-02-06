import type { ReactChildren } from '~/global/types/React'

type OnlyPrimaryButton = {
	primary?: boolean
	secondary?: never
	destructive?: never
}

type OnlySecondaryButton = {
	secondary?: boolean
	primary?: never
	destructive?: never
}

type OnlyDestructiveButton = {
	destructive?: boolean
	primary?: never
	secondary?: never
}

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = ReactChildren & {
	as?: E
	className?: string
} & (OnlyPrimaryButton | OnlySecondaryButton | OnlyDestructiveButton)

export type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
	Omit<React.ComponentProps<E>, keyof ButtonOwnProps>
