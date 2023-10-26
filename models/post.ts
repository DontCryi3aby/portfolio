export interface Author {
	name: string
	title: string
	profileUrl: string
	avatarUrl: string
}

export interface Post {
	id: string | number
	slug: string
	title: string
	createdAt: string
	tagList: string[]
	description: string
	author?: Author
	image?: string
	mdContent?: string
	htmlContent?: string
}
