import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export const getBlogList = async () => {
	const fileNameList = fs.readdirSync(BLOG_FOLDER)

	fileNameList.map((fileName) => {
		const filePath = path.join(BLOG_FOLDER, fileName)
		const fileContents = fs.readFileSync(filePath, 'utf-8')
		console.log(matter(fileContents, { excerpt_separator: '<!-- truncate-->' }))
	})

	return []
}
