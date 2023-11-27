import { LoginPayload, WorkFiltersPayload } from '@/models'
import { yupResolver } from '@hookform/resolvers/yup'
import { Search, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, CircularProgress, IconButton, InputAdornment, debounce } from '@mui/material'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { InputField } from '../form'

export interface WorkFiltersProps {
	initialValues?: WorkFiltersPayload
	onSubmit?: (payload: WorkFiltersPayload) => void
}

export const WorkFilters = ({ initialValues, onSubmit }: WorkFiltersProps) => {
	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<WorkFiltersPayload>({
		defaultValues: {
			search: '',
			...initialValues,
		},
	})

	const handleLoginSubmit = async (payload: WorkFiltersPayload) => {
		await onSubmit?.(payload)
	}

	const debounceSearchChange = debounce(handleSubmit(handleLoginSubmit), 350)

	return (
		<Box component="form" onSubmit={handleSubmit(handleLoginSubmit)} mt={1}>
			<InputField
				name="search"
				placeholder="Enter title to search..."
				control={control}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<Search />
						</InputAdornment>
					),
				}}
				onChange={(e) => {
					debounceSearchChange()
				}}
			/>
		</Box>
	)
}
