import { FeaturedWork, HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<HeroSection />
			<RecentPosts />
			<FeaturedWork />
		</Box>
	)
}

export default Home
