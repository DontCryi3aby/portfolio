import { ListParams, ListResponse, Work } from '@/models'
import axiosClient from './axios-client'

export const workApi = {
	getAll: (params: Partial<ListParams>): Promise<ListResponse<Work>> =>
		axiosClient.get('/works', { params }),
	get: (id: string): Promise<Work> => axiosClient.get(`/works/${id}`),
}
