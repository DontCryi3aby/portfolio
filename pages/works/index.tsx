import { useWorkList } from '@/hooks'
import { Box } from '@mui/material'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
	const { data, isLoading } = useWorkList({ params: { _page: 1 } })
	console.log({ data, isLoading })

	return (
		<Box component="h1" color="red">
			Works Page
		</Box>
	)
}

export const getStaticProps = async () => {
	return { props: {} }
}
