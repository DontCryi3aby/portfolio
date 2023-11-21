import { Box, Container, Typography } from '@mui/material'
import * as React from 'react'
import { WorkList } from '../work'
import { useWorkList } from '@/hooks'

export function FeaturedWork() {
	const { data, isLoading } = useWorkList({ params: { _page: 1, _limit: 3 } })

	return (
		<Box>
			<Container>
				<Typography variant="h5" p={2} mt={2}>
					Featured works
				</Typography>

				<WorkList workList={data?.data || []} loading={isLoading} />
			</Container>
		</Box>
	)
}
