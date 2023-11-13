import { STORAGE_KEYS } from '@/constants/storage-keys'
import { LoginPayload } from '@/models'
import { authApi } from 'api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'

const getUser = () => {
	try {
		return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_INFO) || '')
	} catch (error) {
		return undefined
	}
}

export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000, // 1hr
		revalidateOnFocus: false,
		fallbackData: getUser(),
		onSuccess(data) {
			localStorage.setItem(STORAGE_KEYS.USER_INFO, JSON.stringify(data))
		},
		onError(err) {
			console.log(err)
			logout()
		},
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	const login = async (payload: LoginPayload) => {
		await authApi.login(payload)
		await mutate()
	}

	const logout = async () => {
		await authApi.logout()
		await mutate(null, false)
		localStorage.removeItem(STORAGE_KEYS.USER_INFO)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}
