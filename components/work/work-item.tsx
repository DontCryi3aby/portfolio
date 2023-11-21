import { Work } from '@/models/work'
import { Box, Chip, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

export interface WorkItemProps {
	work: Work
}

export function WorkItem({ work }: WorkItemProps) {
	return (
		<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
			<Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
				<Image
					src={work.thumbnailUrl}
					layout="responsive"
					alt="work thumnail"
					width={246}
					height={180}
				/>
			</Box>

			<Box textAlign={{ xs: 'center', sm: 'left' }}>
				<Typography variant="h5" fontWeight="bold">
					{work.title}
				</Typography>

				<Stack
					direction="row"
					spacing={4}
					mt={2}
					justifyContent={{ xs: 'center', sm: 'flex-start' }}
				>
					<Chip
						label={new Date(Number(work.createdAt)).getFullYear()}
						color="primary"
						size="small"
						sx={{ color: 'white', fontWeight: 'bold', bgcolor: '#142850' }}
					></Chip>

					<Typography color="GrayText">{work.tagList.join(', ')}</Typography>
				</Stack>

				<Typography textAlign="justify" mt={2}>
					{work.shortDescription}
				</Typography>
			</Box>
		</Stack>
	)
}
