import type { NextPage } from 'next'
import DefaultLayout from '~/global/layout/Default'
import Categories from '~/home/components/Categories'
import Hero from '~/home/components/Hero'

const Home: NextPage = () => {
	return (
		<DefaultLayout>
			<Hero />
			<Categories />
		</DefaultLayout>
	)
}

export default Home
