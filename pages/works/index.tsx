import { WorkFilters, WorkList } from '@/components/work'
import { useWorkList } from '@/hooks'
import { ListParams, WorkFiltersPayload } from '@/models'
import { Box, Container, Pagination, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { useRouter } from 'next/router'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	const router = useRouter()

	const filters: Partial<ListParams> = {
		_page: 1,
		_limit: 3,
		...router.query,
	}
	const { data, isLoading } = useWorkList({ params: filters, enabled: router.isReady })

	const { _page, _limit, _totalRows } = data?.pagination || {}
	const totalPages = !!_totalRows ? Math.ceil(_totalRows / _limit) : 0

	const initFiltersValue: WorkFiltersPayload = {
		search: filters.title_like || '',
	}

	const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
		router.push(
			{
				pathname: router.pathname,
				query: {
					...filters,
					_page: value,
				},
			},
			undefined,
			{ shallow: true }
		)
	}

	const handleFiltersSubmit = (newFilters: WorkFiltersPayload) => {
		router.push(
			{
				pathname: router.pathname,
				query: {
					...filters,
					_page: 1,
					title_like: newFilters.search,
				},
			},
			undefined,
			{ shallow: true }
		)
	}

	return (
		<Box>
			<Container>
				<Typography component="h1" variant="h4" fontWeight="bold">
					Work
				</Typography>

				{router.isReady && (
					<WorkFilters initialValues={initFiltersValue} onSubmit={handleFiltersSubmit} />
				)}

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
