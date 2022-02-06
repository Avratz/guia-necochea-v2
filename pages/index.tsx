import type { NextPage } from 'next'
import DefaultLayout from '~/global/layout/Default'
import Hero from '~/home/components/Hero'

const Home: NextPage = () => {
	return (
		<DefaultLayout>
			<Hero />
		</DefaultLayout>
	)
}

export default Home
