import { getBlogList } from '@/utils/blogs'
import { GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'

export interface BlogListProps {
	blogs: any[]
}

export default function BlogList(props: BlogListProps) {
	return <div>BlogList Page</div>
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
