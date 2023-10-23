import * as React from 'react'
import { Card, CardContent, Typography, Stack, Divider } from '@mui/material'
import { Post } from 'models/post'
import { format } from 'date-fns'

export interface PostCardProps {
	post: Post
}

export function PostCard({ post }: PostCardProps) {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" fontWeight="bold">
					{post.title}
				</Typography>

				<Stack mt={2} direction="row">
					<Typography variant="body1">{format(Number(post.createdAt), 'dd MMM yyyy')}</Typography>
					<Divider orientation="vertical" flexItem sx={{ mx: 4, bgcolor: 'common.black' }} />
					<Typography variant="body1">{post.tagList.join(', ')}</Typography>
				</Stack>

				<Typography variant="body2" sx={{ mt: 2, pb: 1, textAlign: 'justify' }}>
					{post.description}
				</Typography>
			</CardContent>
		</Card>
	)
}
