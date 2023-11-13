import { LoginForm } from '@/components/auth'
import { LoginPayload } from '@/models'
import { Container, Paper, Typography } from '@mui/material'
import { useAuth } from 'hooks'
import router from 'next/router'

export default function Login() {
	const { login } = useAuth({
		revalidateOnMount: false,
	})
	const handleLogin = async (payload: LoginPayload) => {
		try {
			await login(payload)
			router.push('/')
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<Container>
			<Paper elevation={2} sx={{ maxWidth: '480px', mt: 4, mx: 'auto', textAlign: 'center', p: 4 }}>
				<Typography variant="h5">Login to discover moreover</Typography>

				<LoginForm onSubmit={handleLogin} />
			</Paper>
		</Container>
	)
}
