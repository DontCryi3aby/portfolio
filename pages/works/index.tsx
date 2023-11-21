import { WorkList } from '@/components/work'
import { useWorkList } from '@/hooks'
import { ListParams } from '@/models'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { useState } from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	const [filters, setFilters] = useState<Partial<ListParams>>({ _page: 1, _limit: 3 })
	const { data, isLoading } = useWorkList({ params: filters })

	const { _page, _limit, _totalRows } = data?.pagination || {}
	const totalPages = !!_totalRows ? Math.ceil(_totalRows / _limit) : 0

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setFilters((prev) => ({
			...prev,
			_page: value,
		}))
	}

	return (
		<Box>
			<Container>
				<Typography component="h1" variant="h4" fontWeight="bold">
					Work
				</Typography>

				<WorkList workList={data?.data || []} loading={isLoading} />

				{totalPages > 1 && (
					<Stack alignItems="center">
						<Pagination count={totalPages} page={_page} onChange={handlePageChange} />
					</Stack>
				)}
			</Container>
		</Box>
	)
}

export const getStaticProps = async () => {
	return { props: {} }
}
