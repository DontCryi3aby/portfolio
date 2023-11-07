import { Seo } from '@/components/common'
import { FeaturedWork, HeroSection, RecentPosts } from '@/components/home'
import { NextPageWithLayout } from '@/models'
import { Box } from '@mui/material'

const Home: NextPageWithLayout = () => {
	return (
		<Box>
			<Seo
				data={{
					title: 'Portfolio - Nguyen Ngoc Thach',
					url: 'https://portfolio-nq4ifan3h-dontcryi3aby.vercel.app/',
					description: 'Make the easiest way for SEO with NextJS',
					thumnailUrl:
						'https://res.cloudinary.com/dfuskfien/image/upload/v1698292014/Portfolio/logoNext_m18oww.jpg',
				}}
			/>

			<HeroSection />
			<RecentPosts />
			<FeaturedWork />
		</Box>
	)
}

export default Home
