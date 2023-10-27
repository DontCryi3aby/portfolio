import { Post } from '@/models/post'
import { getBlogList } from '@/utils/blogs'
import { Box, Container } from '@mui/material'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'
import * as React from 'react'

export interface BlogDetailProps {
	blog: Post
}

export default function BlogDetail({ blog }: BlogDetailProps) {
	if (!blog) return null

	return (
		<Box>
			<Container>
				<h1>Post Detail Page</h1>

				<p>{blog.title}</p>
				<p>{blog.author?.name}</p>
				<p>{blog.description}</p>
				<p>{blog.mdContent}</p>
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

	return { props: { blog } }
}
