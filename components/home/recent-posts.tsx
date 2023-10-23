import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material'
import Link from 'next/link'
import { PostCard } from './post-card'
import { Post } from 'models/post'

const POST_DEMO: Post[] = [
	{
		id: 1,
		title: 'Making a design system from scratch',
		createdAt: '1698076664890',
		tagList: ['Design', 'Pattern'],
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
	{
		id: 2,
		title: 'Creating pixel perfect icons in Figma',
		createdAt: '1698076664890',
		tagList: ['Figma', 'Icon Design'],
		description:
			'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
	},
]

export const RecentPosts = () => {
	return (
		<Box component="section" bgcolor="secondary.light" mt={10} pb={4}>
			<Container>
				<Stack direction="row" justifyContent={{ xs: 'center', md: 'space-between' }} py={2}>
					<Typography variant="h5">Recent posts</Typography>

					<Link href="/blog" passHref>
						<MuiLink sx={{ color: '#00A8CC', display: { xs: 'none', md: 'inline-block' } }}>
							View all
						</MuiLink>
					</Link>
				</Stack>

				<Stack spacing={3} direction={{ xs: 'column', md: 'row' }}>
					{POST_DEMO.map((post) => (
						<Box key={post.id} width={{ xs: '100%', md: '50%' }}>
							<PostCard post={post} />
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	)
}
