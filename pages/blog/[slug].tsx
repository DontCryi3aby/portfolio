import { Seo } from '@/components/common'
import { Post } from '@/models/post'
import { getBlogList } from '@/utils/blogs'
import { Box, Container, Typography } from '@mui/material'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkToc from 'remark-toc'
import { unified } from 'unified'

export interface BlogDetailProps {
	blog: Post
}

export default function BlogDetail({ blog }: BlogDetailProps) {
	if (!blog) return null

	return (
		<Box>
			<Seo
				data={{
					title: blog.title,
					url: `${process.env.HOST_URL}/blog/${blog.slug}`,
					description: blog.description,
					thumnailUrl:
						blog?.image ||
						'https://res.cloudinary.com/dfuskfien/image/upload/v1698292014/Portfolio/logoNext_m18oww.jpg',
				}}
			/>

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
		.use(remarkToc)
		.use(remarkRehype)
		.use(rehypeSlug)
		.use(rehypeAutolinkHeadings, { behavior: 'wrap' })
		.use(rehypeDocument, { title: blog.title })
		.use(rehypeFormat)
		.use(rehypeStringify)
		.process(blog.mdContent)
	blog.htmlContent = file.toString()

	return { props: { blog } }
}
