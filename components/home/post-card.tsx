import { Card, CardContent } from '@mui/material'
import { Post } from 'models/post'
import { PostItem } from '../blog'

export interface PostCardProps {
	post: Post
}

export function PostCard({ post }: PostCardProps) {
	return (
		<Card>
			<CardContent>
				<PostItem post={post} />
			</CardContent>
		</Card>
	)
}
