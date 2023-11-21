import { WorkList } from '@/components/work'
import { useWorkList } from '@/hooks'
import { Box, Container, Typography } from '@mui/material'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	const { data, isLoading } = useWorkList({ params: { _page: 1, _limit: 3 } })

	return (
		<Box>
			<Container>
				<Typography component="h1" variant="h4" fontWeight="bold">
					Work
				</Typography>

				<WorkList workList={data?.data || []} loading={isLoading} />
			</Container>
		</Box>
	)
}

export const getStaticProps = async () => {
	return { props: {} }
}
