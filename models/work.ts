export interface Work {
	id: string | number
	title: string
	createdAt: string
	updatedAt: string
	tagList: string[]
	shortDescription: string
	fullDescription: string
	thumbnailUrl: string
}

export interface WorkFiltersPayload {
	search: string
}
