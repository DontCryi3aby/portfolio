import { Post } from '@/models/post'
import { getBlogList } from '@/utils/blogs'
import { Box, Container, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export interface BlogDetailProps {
	blog: Post
}

export default function BlogDetail({ blog }: BlogDetailProps) {
	if (!blog) return null

	return (
		<Box>
			<Container>
				<Typography variant="h4" fontWeight="bold">
					{blog.title}
				</Typography>
				<Typography variant="h5" fontWeight="bold">
					{blog.author?.name}
				</Typography>
				<Box dangerouslySetInnerHTML={{ __html: blog.htmlContent || '' }}></Box>
			</Container>
		</Box>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const blogList = await getBlogList()

	return {
		paths: blogList.map((blog) => ({ params: { slug: blog.slug } })),
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<BlogDetailProps> = async (
	context: GetStaticPropsContext
) => {
	const blogList = await getBlogList()

	const slug = context.params?.slug
	if (!slug) return { notFound: true }

	const blog = blogList.find((b) => b.slug === slug)
	if (!blog) return { notFound: true }

	const file = await unified()
		.use(remarkParse)
		.use(remarkRehype)
		.use(rehypeDocument, { title: blog.title })
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(blog.mdContent)
	blog.htmlContent = file.toString()

	return { props: { blog } }
}
