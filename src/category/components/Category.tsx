import React from 'react'
import Heading from '~/global/components/Heading'
import Image from '~/global/components/Image'
import Link from '~/global/components/Link'

type CategoryProps = {
	name: string
	href: string
	image: string
}

function Category({ name, image, href }: CategoryProps) {
	return (
		<div className='mr-4 my-8'>
			<div className='w-[260px] h-[160px] overflow-hidden rounded-xl'>
				<Image src={image} alt='' layout='fixed' width={260} height={160} />
			</div>
			<Link href={href}>
				<Heading as='h3' size='text-xl' className='py-2 text-gray-500'>
					{name}
				</Heading>
			</Link>
		</div>
	)
}

export default Category
