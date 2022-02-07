import React from 'react'
import Heading from '~/global/components/Heading'
import Input from '~/global/components/Input'
import { mergeClasses } from '~/global/utils/Styles'

function Hero() {
	const heroClass = mergeClasses(
		'flex flex-col items-center justify-center h-screen w-full px-4 bg-mobile-low bg-cover',
		'',
	)
	return (
		<section className={heroClass}>
			<Heading size='text-6xl' className='text-center font-bold text-white'>
				Encontrá lo que buscás.
			</Heading>
			<Input placeholder='Buscar' className='my-8' rounded />
		</section>
	)
}

export default Hero
