import { Box, Container } from '@mui/material'
import HeaderDesktop from './header-desktop'
import HeaderMobile from './header-mobile'

export default function Header() {
	return (
		<Box component="header">
			<Container>
				<HeaderDesktop />
				<HeaderMobile />
			</Container>
		</Box>
	)
}
