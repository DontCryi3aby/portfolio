import { LoginForm } from '@/components/auth'
import { Typography } from '@mui/material'
import { authApi } from 'api-client'
import { useAuth } from 'hooks'
import router from 'next/router'
import * as React from 'react'

export default function Login() {
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

	return <LoginForm />
}
