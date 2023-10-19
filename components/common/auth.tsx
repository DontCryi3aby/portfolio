import { useAuth } from 'hooks'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function Auth({ children }: any) {
	const router = useRouter()
	const { profile, firstLoading } = useAuth()

	useEffect(() => {
		if (!firstLoading && !profile?.username) router.push('/login')
	}, [profile, firstLoading, router])

	if (!profile?.username) return <p>Loading...</p>

	return <div>{children}</div>
}
