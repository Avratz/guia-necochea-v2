import React from 'react'
import SectionTitle from '~/global/components/SectionTitle'
import Slider from 'react-slick'
import Category from '~/category/components/Category'

const dummyCategories = [
	{
		id: 1,
		name: 'Restaurantes',
		href: '/comercios/restaurantes',
		image: '/images/categories/1.jpg',
	},
	{
		id: 2,
		name: 'Bares',
		href: '/comercios/bares',
		image: '/images/categories/4.jpg',
	},
	{
		id: 3,
		name: 'Cafeterías',
		href: '/comercios/cafeterias',
		image: '/images/categories/6.jpg',
	},
	{
		id: 4,
		name: 'Balnearios',
		href: '/comercios/balnearios',
		image: '/images/categories/2.jpg',
	},
	{
		id: 5,
		name: 'Cervecerias',
		href: '/comercios/cervecerias',
		image: '/images/categories/3.jpg',
	},
	{
		id: 6,
		name: 'Pizzerías',
		href: '/comercios/pizzerias',
		image: '/images/categories/7.jpg',
	},
	{
		id: 7,
		name: 'Heladerías',
		href: '/comercios/heladerias',
		image: '/images/categories/5.jpg',
	},
]

const Categories = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
	}
	return (
		<section className='w-full overflow-hidden pl-4'>
			<SectionTitle>Categorías</SectionTitle>
			<Slider {...settings}>
				{dummyCategories.map((category) => (
					<Category key={category.id} {...category} />
				))}
			</Slider>
		</section>
	)
}

export default Categories
