import { Box, Button, IconButton, InputAdornment } from '@mui/material'
import { useForm } from 'react-hook-form'
import { InputField } from '../form'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useState } from 'react'
import { LoginPayload } from '@/models'

export interface LoginFormProps {
	onSubmit?: (payload: LoginPayload) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const { control, handleSubmit } = useForm<LoginPayload>({
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const [isShowPassword, setIsShowPassword] = useState(false)

	const handleLoginSubmit = (payload: LoginPayload) => {
		console.log(payload)
		onSubmit?.(payload)
	}

	return (
		<Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
			<InputField name="username" placeholder="Enter username..." control={control} />
			<InputField
				type={isShowPassword ? 'text' : 'password'}
				name="password"
				control={control}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<IconButton
								aria-label="toggle password visibility"
								onClick={() => setIsShowPassword((prev) => !prev)}
								edge="end"
							>
								{isShowPassword ? <VisibilityOff /> : <Visibility />}
							</IconButton>
						</InputAdornment>
					),
				}}
				placeholder="Enter password..."
			/>

			<Button type="submit" variant="contained">
				Login
			</Button>
		</Box>
	)
}
