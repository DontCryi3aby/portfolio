import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import Footer from '../common/footer'
import Header from '../common/header'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Link href="/works">
				<a>Works</a>
			</Link>

			<Link href="/blog">
				<a>Blog</a>
			</Link>

			<Link href="/contact">
				<a>Contact</a>
			</Link>

			<Box component="main" flex={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
