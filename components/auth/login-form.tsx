import { LoginPayload } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, CircularProgress, IconButton, InputAdornment } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InputField } from '../form'

export interface LoginFormProps {
	onSubmit?: (payload: LoginPayload) => void
}

export const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const schema = yup
		.object({
			username: yup
				.string()
				.required('Please enter username!')
				.min(4, 'Username is required at least 4 characters!'),
			password: yup
				.string()
				.required('Please enter password!')
				.min(6, 'Username is required at least 6 characters!'),
		})
		.required()

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<LoginPayload>({
		defaultValues: {
			username: '',
			password: '',
		},
		resolver: yupResolver(schema),
	})

	const [isShowPassword, setIsShowPassword] = useState(false)

	const handleLoginSubmit = async (payload: LoginPayload) => {
		await onSubmit?.(payload)
	}

	return (
		<Box component="form" onSubmit={handleSubmit(handleLoginSubmit)} mt={1}>
			<InputField name="username" label="Username" control={control} />
			<InputField
				type={isShowPassword ? 'text' : 'password'}
				name="password"
				label="Password"
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
			/>

			<Button
				type="submit"
				variant="contained"
				fullWidth
				startIcon={isSubmitting ? <CircularProgress color="inherit" size="1em" /> : null}
				disabled={isSubmitting}
				sx={{ mt: 2 }}
			>
				Login
			</Button>
		</Box>
	)
}
