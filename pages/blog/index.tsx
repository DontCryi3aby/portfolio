import { PostItem } from '@/components/blog'
import { Post } from '@/models/post'
import { getBlogList } from '@/utils/blogs'
import { Box, Container, Divider, Link as MuiLink, Typography } from '@mui/material'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import Link from 'next/link'

export interface BlogListProps {
	blogs: Post[]
}

export default function BlogList({ blogs }: BlogListProps) {
	return (
		<Box>
			<Container>
				<Typography variant="h4" fontWeight="bold">
					Blog
				</Typography>

				<Box mt={5}>
					{blogs.map((blog) => (
						<Box key={blog.id}>
							<Link href={`/blog/${blog.slug}`} passHref>
								<MuiLink>
									<PostItem post={blog} />
								</MuiLink>
							</Link>
							<Divider sx={{ my: 4 }} />
						</Box>
					))}
				</Box>
			</Container>
		</Box>
	)
}

export const getStaticProps: GetStaticProps<BlogListProps> = async (
	context: GetStaticPropsContext
) => {
	const blogList = await getBlogList()
	return {
		props: {
			blogs: blogList,
		},
	}
}
