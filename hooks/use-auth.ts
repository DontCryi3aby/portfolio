import { LoginPayload } from '@/models'
import { authApi } from 'api-client'
import useSWR from 'swr'
import { PublicConfiguration } from 'swr/_internal'

export function useAuth(options?: Partial<PublicConfiguration>) {
	const {
		data: profile,
		error,
		mutate,
	} = useSWR('/profile', {
		dedupingInterval: 60 * 60 * 1000, //1 hr
		revalidateOnFocus: true,
		...options,
	})

	const firstLoading = profile === undefined && error === undefined

	const login = async (payload: LoginPayload) => {
		await authApi.login(payload)
		await mutate()
	}

	const logout = async () => {
		await authApi.logout()
		await mutate({}, false)
	}

	return {
		profile,
		error,
		login,
		logout,
		firstLoading,
	}
}
