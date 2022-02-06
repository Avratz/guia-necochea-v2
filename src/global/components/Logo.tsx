import { ImageProps } from 'next/image'
import React from 'react'
import Image from './Image'

type LogoProps = { className?: string; black?: boolean }

function Logo({ className, black }: LogoProps) {
	const src = black ? '/logo-black.png' : '/logo-white.png'
	return <Image className={className} alt='' width={183} height={44} src={src} />
}

export default Logo
