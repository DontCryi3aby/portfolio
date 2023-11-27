import { workApi } from '@/api-client'
import { QUERY_KEYS } from '@/constants/query-keys'
import { ListParams } from '@/models'
import useSWR, { SWRConfiguration } from 'swr'

export interface UseWorkListProps {
	params: Partial<ListParams>
	options?: SWRConfiguration
	enabled?: boolean
}

export const useWorkList = ({ params, options, enabled = true }: UseWorkListProps) => {
	const swrResponse = useSWR(
		enabled ? [QUERY_KEYS.GET_WORK_LIST, params] : null,
		() => workApi.getAll(params),
		{
			dedupingInterval: 10 * 1000,
			keepPreviousData: true,
			fallbackData: {
				data: [],
				pagination: {
					_page: 1,
					_limit: 10,
					_totalRows: 0,
				},
			},
			...options,
		}
	)

	return swrResponse
}
