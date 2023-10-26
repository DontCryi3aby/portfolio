import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Post } from '@/models/post'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export const getBlogList = async (): Promise<Post[]> => {
	const fileNameList = fs.readdirSync(BLOG_FOLDER)

	const postList: Post[] = []

	fileNameList.map((fileName) => {
		const filePath = path.join(BLOG_FOLDER, fileName)
		const fileContents = fs.readFileSync(filePath, 'utf-8')
		const { data, excerpt, content } = matter(fileContents, {
			excerpt_separator: '<!-- truncate-->',
		})

		postList.push({
			id: fileName,
			slug: data.slug,
			title: data.title,
			author: {
				name: data.author,
				title: data.author_title,
				profileUrl: data.author_url,
				avatarUrl: data.author_image_url,
			},
			description: excerpt || '',
			tagList: data.tags,
			mdContent: content,
			image: data?.image || null,
			createdAt: data.date,
		})
	})

	return postList
}
