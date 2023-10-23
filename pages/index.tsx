import { HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPosts />
		</Box>
	)
}

export default Home
