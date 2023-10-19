import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'
import { Container } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}>
				SM CONTAINER
			</Container>
			<Container sx={{ bgcolor: 'primary.main' }}>MD CONTAINER</Container>
			<Box>Home Page</Box>
		</Box>
	)
}

export default Home
