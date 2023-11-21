import { Work } from '@/models/work'
import { Box, Divider, Typography } from '@mui/material'
import { Fragment } from 'react'
import { WorkItem } from './work-item'
import noDataImg from '@/public/assets/imgs/no-data.png'
import Image from 'next/image'
import { WorkSkeleton } from './work-skeleton'

export interface WorkListProps {
	workList: Work[]
	loading: boolean
}

export function WorkList({ workList, loading }: WorkListProps) {
	if (loading) {
		return (
			<Box>
				{Array.from({ length: 3 }).map((_, index) => (
					<Fragment key={index}>
						<WorkSkeleton />
						<Divider sx={{ my: 4 }} />
					</Fragment>
				))}
			</Box>
		)
	}

	if (workList.length === 0)
		return (
			<Box textAlign="center" mt={4}>
				<Image src={noDataImg} width={200} height={200} layout="fixed" alt="No data" />
				<Typography component="h3" variant="h5">
					No data founded!
				</Typography>
			</Box>
		)

	return (
		<Box>
			{workList.map((work) => (
				<Fragment key={work.id}>
					<WorkItem work={work} />
					<Divider sx={{ my: 4 }} />
				</Fragment>
			))}
		</Box>
	)
}
