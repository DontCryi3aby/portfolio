import { LayoutProps } from '@/models'
import { Box, Stack } from '@mui/material'
import Footer from '../common/footer'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('../common/header'), {
	ssr: false,
})

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
