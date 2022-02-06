import Head from 'next/head'
import React from 'react'
import Header from '~/global/components/Header'
import Main from '~/global/components/Main'

type DefaultLayoutProps = {
	children: React.ReactNode
	logoBlack?: boolean
	headTitle?: string
}

const defaultTitle = 'Guía Necochea'
function DefaultLayout({ children, headTitle = defaultTitle, logoBlack }: DefaultLayoutProps) {
	return (
		<React.Fragment>
			<Head>
				<title>{headTitle}</title>
				<meta
					name='description'
					content='Encontra lo que estas buscando en la guía comercial de la ciudad'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header logoBlack={logoBlack} />
			<Main>{children}</Main>
		</React.Fragment>
	)
}

export default DefaultLayout
