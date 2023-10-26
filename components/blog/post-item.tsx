import { Post } from '@/models/post'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'
import * as React from 'react'

export interface PostItemProps {
	post: Post
}

export function PostItem({ post }: PostItemProps) {
	return (
		<Box>
			<Typography variant="h5" fontWeight="bold">
				{post.title}
			</Typography>

			<Stack mt={2} direction="row">
				<Typography variant="body1">{format(new Date(post.createdAt), 'dd MMM yyyy')}</Typography>
				<Divider orientation="vertical" flexItem sx={{ mx: 4, bgcolor: 'common.black' }} />
				<Typography variant="body1">{post.tagList.join(', ')}</Typography>
			</Stack>

			<Typography variant="body2" sx={{ mt: 2, pb: 1, textAlign: 'justify' }}>
				{post.description}
			</Typography>
		</Box>
	)
}
