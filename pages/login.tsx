import { LoginForm } from '@/components/auth'
import { LoginPayload } from '@/models'
import { authApi } from 'api-client'
import { useAuth } from 'hooks'

export default function Login() {
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	})
	const handleLogin = async (payload: LoginPayload) => {
		try {
			await login(payload)
			console.log('redirect')
		} catch (error) {
			console.log(error)
		}
	}

	const handleGetProfile = async () => {
		try {
			await authApi.getProfile()
		} catch (error) {
			console.log(error)
		}
	}

	const handleLogout = async () => {
		try {
			await logout()
			console.log('redirect')
		} catch (error) {
			console.log(error)
		}
	}

	return <LoginForm onSubmit={handleLogin} />
}
