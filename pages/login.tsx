import { Typography } from '@mui/material'
import { authApi } from 'api-client'
import { useAuth } from 'hooks'
import router from 'next/router'
import * as React from 'react'

export default function App() {
	const { profile, login, logout } = useAuth({
		revalidateOnMount: false,
	})
	const handleLogin = async () => {
		try {
			await login()
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

	return (
		<div>
			<Typography component="h1" variant="h3" color="primary.main">
				Login Page
			</Typography>

			<button onClick={() => router.push('/')}>Back to Home</button>

			<p>Profile: {JSON.stringify(profile || null)}</p>

			<button onClick={handleLogin}>Login</button>
			<button onClick={handleGetProfile}>Get profile</button>
			<button onClick={handleLogout}>Logout</button>
		</div>
	)
}
