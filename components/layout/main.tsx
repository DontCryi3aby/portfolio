import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import Link from 'next/link'
import Footer from '../common/footer'
import Header from '../common/header'

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight="100vh">
			<Header />

			<Box component="main" flex={1}>
				{children}
			</Box>

			<Footer />
		</Stack>
	)
}
